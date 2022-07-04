import { Client } from "@notionhq/client"
import fetch from "node-fetch"
import dotenv from 'dotenv'
dotenv.config()

const notionSecret = process.env.NOTION_SECRET
const databaseId = process.env.DATABASE_ID
const currencyPageId = process.env.PAGE_ID1

const notion = new Client({ auth: notionSecret })

let currency = 'BTC'
let binanceApiUrl
let currencyPrice

binanceApiUrl = `https://api.binance.com/api/v3/ticker/price?symbol=${currency}BRL`

async function addItem(price, pageid) {
  try {
    const response = await notion.pages.update({
      parent: { database_id: databaseId },
      page_id: pageid,
      properties: {
          Preco: {
               number: price
          }
      },
    })
    console.log("Success!")
  } catch (error) {
    console.error(error.body)
  }
}


async function fetchData(){
     try {
          await fetch(binanceApiUrl)
          .then(res => res.json())
          .then(out => currencyPrice = parseFloat(out.price))
          addItem(currencyPrice, currencyPageId)
          
          console.log("Price updated!");
          setTimeout(() => fetchData(), 3000);
     } 

     catch(error) { console.log(error)}
}

fetchData();

