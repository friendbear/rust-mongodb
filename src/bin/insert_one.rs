use mongodb::bson::{self, doc, Bson};
use mongodb::options::ClientOptions;
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

    let coll = client.database("booklog").collection("users");

    let delete_result = coll.delete_many(
        doc!{
            "email": "sachiko.sato@sample.co.jp"
        },
        None
    ).await?;

    println!("{:?} count deleted.", delete_result.deleted_count);

    let insert_result = coll.insert_one(
        doc! {
            "email": "sachiko.sato@sample.co.jp",
            "password": "P@ssword",
            "name": "佐藤 幸子",
            "joind": Utc::now()
        }, None).await?;
    
    println!("Insert: {:?}", insert_result);

    let update_result =  coll.update_one(
        doc!{
            "email": "sachiko.sato@sample.co.jp",
        },
        doc!{
             "$set": {"password": "qwerty"},
        }, None).await?;

    println!("update: {:?}", update_result);

    let find_result = coll.find_one(
        doc!{
            "email": "sachiko.sato@sample.co.jp",
        }, None).await?.expect("Not Found.");
    
    let user_json: serde_json::Value = Bson::from(find_result).into();

    println!("JSON: {:?}", user_json);

    Ok(())
}