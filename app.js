// import functions and grab DOM elements
import { books } from './books.js';
import { renderBook } from './utils.js';
import { movies } from './movies.js';
import { renderMovie } from './utils.js';
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const bookListEl = document.getElementById('book');

function listOfBooks() {
    for (let book of books) {
        const bookDiv = renderBook(book);
        bookListEl.append(bookDiv);
    }}

listOfBooks();

const movieListEL = document.getElementById('movies');

function listOfMovies() {
    for (let movie of movies) {
        const movieDiv = renderMovie(movie);
        movieListEL.append(movieDiv);

    }}

listOfMovies();