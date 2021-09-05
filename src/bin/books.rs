use mongodb::{bson::{DateTime, doc, Bson}, options::{
        ResolverConfig,
        ClientOptions,
        FindOptions
    }};
use std::env;
use std::error::Error;
use serde::{Deserialize, Serialize};
use tokio;
use tokio_stream::StreamExt;
use chrono::prelude::*;

#[derive(Debug, Serialize, Deserialize)]
struct Book {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    id: Option<mongodb::bson::oid::ObjectId>,
    title: String,
    price: i32,
    authors: Vec<String>,
    publisher: String,
    categories: Vec<String>,
    launch: DateTime,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>>{

    let client_url =
        env::var("MONGODB_URL").expect("You must set the MONGODB_URL environment var!");
    
    let options =
        ClientOptions::parse_with_resolver_config(&client_url, ResolverConfig::cloudflare()).await?;
    let client = mongodb::Client::with_options(options)?;

    //let books = client.database("booklog").collection_with_type::<Book>("books");
    let books = client.database("booklog").collection("books");

    let mut result  = books.find(
        None, //book_filter,
        FindOptions::builder().sort({
            doc!{
                "launch": -1
            }
        }).build()
    ).await?;

    while let Some(result) = result.next().await {
        match result {
            Ok(document) => {
                if let Some(title) = document.get("title").and_then(bson::Bson::as_str) {
                    println!("title: {}", title);
                } else {
                    println!("no title found");
                }
            }
            Err(e) => return Err(e.into()),
        }
    }

    // Initialize struct to be inserted:
    let new_book = Book {
        id: None,
        title: "Programming Rust".to_owned(),
        price: 4500,
        authors: vec![String::from("Jim Blandy"), String::from("Jason Orendorff")],
        publisher: "O'REILLY".to_owned(),
        categories: vec![String::from("tec")],
        launch: DateTime(Utc.ymd(2018, 8, 8).and_hms(0, 0, 0)),
    };
    let serialized_book = bson::to_bson(&new_book)?;
    let document = serialized_book.as_document().unwrap();
    let insert_result = books.insert_one(document.to_owned(), None).await;

    println!("new insert books: {:?}", insert_result);
    // let book_json: serde_json::Value = Bson::from(None).into();

    // println!("JSON: {:?}", user_json);

    let book_filter = doc! {
        "$or": [{
            "price": { "$gt": 454 }
        }, {
            "publisher": "O'REILLY"
        }]};

    let count = books.count_documents(
        book_filter,
        None
    ).await?;

    println!("books stored: {:?}", count);

    Ok(())
}