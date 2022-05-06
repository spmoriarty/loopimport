
//rendering books

export function renderBook(books) {
    const div = document.createElement('div');
    div.classList.add('book');

    const h1 = document.createElement('h1');
    h1.textContent = books.series;

    // const h2 = document.createElement('h2');
    // h2.textContent = books.series;

    const img = document.createElement('img');
    img.src = books.img;

    const p = document.createElement('p');
    p.textContent = `${books.name} is part ${books.part} of a ${books.number} book series with the book being published in ${books.year}.`;

    div.append(h1, img, p);
    return div;

}


//Starwars

export function renderMovie(movies) {
    const div = document.createElement('div');
    div.classList.add('movie');

    const img = document.createElement('img');
    img.src = movies.img;

    const h1 = document.createElement('h1');
    h1.textContent = movies.series;

    const p = document.createElement('p');
    p.textContent = `Of the greatest stories ever brought to film, ${movies.name} was the ${movies.number} installment of the original trilogy released in ${movies.year}.`;

    div.append(img, h1, p);
    return div;
}

//The GOAT

export function renderCage(GOAT) {
    const div = document.createElement('div');
    div.classList.add('goat');

    const img = document.createElement('img');
    img.src = GOAT.img;

    const h1 = document.createElement('h1');
    h1.textContent = GOAT.who;

    const p = document.createElement('p');
    p.textContent = `Nicolas Cage is demonstrably the greatest actor in over 100 years. Here is an example of the GOAT in his element is with the movie ${GOAT.movie}, where he masters the art of ${GOAT.emotion}, as shown in this picture.`;

    div.append(h1, p);
    return div;
}
    

