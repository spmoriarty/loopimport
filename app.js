// import functions and grab DOM elements
import { books } from './books.js';
import { renderBook } from './utils.js';
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const bookListEl = document.getElementById('book');

for (let book of books) {
    const bookDiv = renderBook(book);
    bookDiv.append(bookListEl);
}