# Getting Started with myreads App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How To Run

In the project directory, you can run:

### `npm i`

<p>Run "npm i"To install all dependencies included in "package.json" file.<p>
<p>All the dependencies of the project will be installed in node_modules folder.<p>

#### Example
* Open window terminal 
* Type "cd+[App Directory]"
* Example "cd D:/Web-Projects/myreads"
* Then type "npm i" 

### `npm start`
* Open window terminal 
* Type cd+[App Directory]
* Eaxmple "cd D:/Web-Projects/myreads"
* Type "npm start" to start the App

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## App Description
### `Overview`
"myreads",  a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.
### `Functionality`
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.
