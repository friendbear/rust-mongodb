use mongodb::options::ClientOptions;
use mongodb::{
    bson::{doc, Document},
    Client,
};
use std::env;
use serde::{Deserialize, Serialize};
use std::error::Error;
use chrono::prelude::*;
// use tokio;
use trust_dns_resolver::config::*;


#[async_std::main]
async fn main() -> Result<(), Box<dyn Error>>{

    let client_url =
        env::var("MONGODB_URL").expect("You must set the MONGODB_URL environment var!");
    
    let options =
        ClientOptions::parse_with_resolver_config(&client_url, ResolverConfig::cloudflare()).await?;
    let client = mongodb::Client::with_options(options)?;

    let books = client.database("booklog").collection("books");

    let count = books.count_documents(
        doc!{},
        None
    ).await?;

    println!("books stored: {:?}", count);

    // let book_json: serde_json::Value = Bson::from(None).into();

    // println!("JSON: {:?}", user_json);

    Ok(())
}