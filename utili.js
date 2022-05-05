export function renderBook(books) {
    const div = document.createElement('div');
    div.classList.add('book');

    const h1 = document.createElement('h1');
    h1.textConent = books.name;

    const img = document.createElement('img');
    img.src = books.img;

    const p = document.createElement('p');
    p.textContent = `${books.name} is part of a ${books.number} book series with the book being published in ${books.year}`;

    div.append(h1, img, p);
    return div;

}

    

