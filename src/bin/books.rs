use mongodb::{bson::{DateTime, bson, doc}, options::{
        ResolverConfig,
        ClientOptions,
        FindOptions
    }};
use std::env;
use std::error::Error;
use serde::{Deserialize, Serialize};
use tokio;

#[derive(Debug, Serialize, Deserialize)]
struct Book {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    id: Option<mongodb::bson::oid::ObjectId>,
    title: String,
    authors: Vec<String>,
    publisher: String,
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
    let mut books = client.database("booklog").collection("books");

    let count = books.count_documents(
        doc!{
            "publisher": "講話社"
        },
        None
    ).await?;

    println!("books stored: {:?}", count);

    let options = FindOptions::builder().sort({
            doc!{
                "launch": -1
            }
        }
    ).build();
    let mut result  = books.find(
        None,
        None,
    ).await?;

    println!("{:?}", &result);
    while let Some(doc) = result.next().await {
        println!("{:?}", doc?);
    }
    // let book_json: serde_json::Value = Bson::from(None).into();

    // println!("JSON: {:?}", user_json);

    Ok(())
}