use mongodb::bson::{self, doc, Bson};
use mongodb::options::ClientOptions;
use std::env;
use std::error::Error;
// use tokio;
use trust_dns_resolver::config::*;


#[async_std::main]
async fn main() -> Result<(), Box<dyn Error>>{

    let client_url =
        env::var("MONGODB_URL").expect("You must set the MONGODB_URL environment var!");
    
    let options =
        ClientOptions::parse_with_resolver_config(&client_url, ResolverConfig::cloudflare()).await?;
    let client = mongodb::Client::with_options(options)?;

    println!("Databases:");
    for name in client.list_database_names(None, None).await? {
        println!(" - {:?}", name);
    }

    Ok(())
}