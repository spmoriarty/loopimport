
//rendering books

export function renderBook(books) {
    const div = document.createElement('div');
    div.classList.add('book');

    const h1 = document.createElement('h1');
    h1.textContent = books.series;

    const h2 = document.createElement('h2');
    h2.textContent = books.series;

    const img = document.createElement('img');
    img.src = books.img;

    const p = document.createElement('p');
    p.textContent = `${books.name} is part ${books.part} of a ${books.number} book series with the book being published in ${books.year}.`;

    div.append(h1, h2, img, p);
    return div;

}

    

