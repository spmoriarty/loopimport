import { books } from './books.js';
import { renderBook } from './utili.js';

const test = QUnit.test;

test('test render func', (expect) => {
    const expected = '<div class="books"><h1>Book Series</h1><img src="./assets/LOTR1.gif"><p> The fellowship of the ring is part of a 3 book series with the book being published in 1954.</p></div>';

    const actual = renderBook(books[0]);

    expect.equal(actual.outerHTML, expected);
    
});
