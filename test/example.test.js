import { books } from '../books.js';
import { renderBook } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    const expected = '<div class="book"><h1>The Lord of the Rings</h1><h2>The Lord of the Rings</h2><img src="./assets/LOTR1"><p>The fellowship of the ring is part 1 of a 3 book series with the book being published in 1954.</p></div>';

    const actual = renderBook(books[0]);

    expect.equal(actual.outerHTML, expected);
});
