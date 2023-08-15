#  React Toolkit/Angular ngrx Crud 

This repository contain fullstack app for the Author manager app

#  Angular Frontend

## Project structure

-public

-src

 --app

 --author
 
 --book

  -service

  -assets
  
  -index


## Tech used

- Angular (Bootstrap) CSS framework for styling
- ngrx
- Eslint

## How to run locally

Clone or download project go to the Front-end
Inside Front-end open node console

Then type  `npm install`
 Run `npm start` if you have node installed locally.
 
Open your browse to `localhost:4000`


#  React Frontend

## Project structure

-public

-src

 --component

 --service
 
 --redux

  -app

  -test
  
  -index


## Tech used

- React-strap (Bootstrap) CSS framework for styling
- React
- Redux Toolkit
- Eslint

## How to run locally

Clone or download project go to the Front-end
Inside Front-end open node console

Then type  `npm install`
 Run `npm start` if you have node installed locally.
 
Open your browse to `localhost:3000`



#  Node Back-end

## Project structure

-node_module

---config	

 ----controller
 
 ----model
 
 ----route
 
 ----test
 
  -app
  
  -index


## Tech used

- Node Express
- Jest


## How to run locally

Clone or download project go to the Back-end
Inside Backend open node console
Then type  `npm install`
Run `npm start` if you have node installed locally.
App gonna be run `localhost:5000`

### Mongodb credential

Inside .env edit this regarding to mongodb database information 
 
MONGO_URI=you credential

## Rest api structure

### Author api

Methods | Urls | Action	
--- | --- | ---
**GET** | `/api/authors` |  List All Authors
**GET**| `/api/author/:id` |  List single Author
**POST** | `/api/author` | Create New Author 
**PUT** | `/api/author/:id` | Edit Author 
**DELETE** | `/api/author/:id` |  delete Author 

Author json
{
        "first_name": "Test First",
		
        "last_name": "Test Last",
    },
	
### Book api

Methods | Urls | Action	
--- | --- | ---
**GET** | `/api/books` |  List All Books 
**GET**| `/api/book/:id` |  List single Book
**POST** | `/api/book` | Create New Book 
**PUT** | `/api/book/:id` | Edit Book 
**DELETE** | `/api/book/:id` |  delete Book 
	
Book json	
	{
        "name": "book name",
		
        "isbn": "558465664564",
		
		"author":{
		
		"first_name": "Test First",
		
        "last_name": "Test Last",
		
		}
    },




## Tests 

Open Project

Open node console run `npm test` to have jest start and watch the tests.