const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.newBook = function () {
  addBookToLibrary(this);
};

function addBookToLibrary(Book) {
  // do stuff here
  myLibrary.push(Book);
}

const theHobbit = new Book(
  "the Hobbit",
  "J.R.R Tolkien",
  "800",
  "not read yet"
);

function displayBooks() {

  const bookContainer = document.getElementById("book-container");

  for (const bookObj of myLibrary) {
    const book = document.createElement("div");
    const title = document.createElement("h1");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");

    book.classList.add("card");
    bookContainer.appendChild(book);

    title.textContent = bookObj.title;
    author.textContent = `Author: ${bookObj.author}`;
    pages.textContent = `Pages: ${bookObj.pages}`;
    read.textContent = `Read: ${bookObj.read}`;

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);
  }

}

theHobbit.newBook();

console.log(myLibrary);

displayBooks();
