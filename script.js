const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.newBook = function() {
    addBookToLibrary(this);
}

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

theHobbit.newBook();
console.log(myLibrary);