function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json()) // convert response to JSON
    .then(books => renderBooks(books)); // pass JSON data to renderBooks
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach(book => {
    const h2 = document.createElement("h2");
    h2.textContent = book.name; // book title
    main.appendChild(h2);
  });
}

// call fetchBooks when the page loads
document.addEventListener("DOMContentLoaded", fetchBooks);
