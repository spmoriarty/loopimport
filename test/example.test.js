import { books } from '../books.js';
import { renderBook } from '../utils.js';
import { renderMovie } from '../utils.js';
import { movies } from '../movies.js';

const test = QUnit.test;

test('time to test books', (expect) => {
    const expected = '<div class="book"><h1>The Lord of the Rings</h1><img src="./assets/LOTR1"><p>The fellowship of the ring is part 1 of a 3 book series with the book being published in 1954.</p></div>';

    const actual = renderBook(books[0]);

    expect.equal(actual.outerHTML, expected);
});


const test2 = QUnit.test;

test2('time to test movies', (expect) => {
    const expected = '<div class="movie"><img src="./assets/ANH"><h1>Starwars</h1><p>Of the greatest stories ever brought to film, A new Hope was the first installment of the original trilogy released in 1977.</p></div>';

    const actual = renderMovie(movies[0]);

    expect.equal(actual.outerHTML, expected);
});
