# Crypto price in Notion with Binance API
### 1.1 Introduction
- This is an application to access the price of a given currency through your databases in Notion. In this appplication, using Node.js, we have the Bitcoin price being refreshed every 3 seconds. 

![Application](assets/workingCode.gif)

### 1.2 Dependencies
- This is a simple project, and use the three dependencies above (installation):

     ```npm i dotenv```

     ```npm i @notionhq```

     ```npm i node-fetch```

### 1.3 Notion API (in progress)
- In order to use this project in your own databases in Notion, you'll have to get some information from your Notion:

     1. Enter the page where your database is

     2. Move the cursor until you find the option "Open as full page"

     3. Now that you have your database opened, go to the URL of the browser. You will find something like: 

          ```https://www.notion.so/YOURNAME/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx?v=yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy```

     Your DATABASE ID is the correspondent code of the 'x's. Never share this id with anyone. 

     4. Now, create a new item in your database, with the name of the currency you want to add. 

     5. Create a new column called "Price"

     6. Go to the item you just created an select "open as page" 

     7. Just like the item 3, you'll have an URL: 

          ```https://www.notion.so/juriolli/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx?v=yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy&p=zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz```

          This time you will copy the correspondent code with the 'z's

     8. Separate this code in the format above: 

          ```zzzzzzzz-zzzz-zzzz-zzzz-zzzzzzzzzzzz```

          This is your CURRENCY PAGE ID.



