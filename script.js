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

function displayBooks(bookObj) {
  const bookContainer = document.getElementById("book-container");

  const book = document.createElement("div");
  const title = document.createElement("h1");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const read = document.createElement("p");
  const removeButton = document.createElement("button");
//   removeButton.setAttribute("id", "remove-book-button");

  book.classList.add("card");
  bookContainer.appendChild(book);
//  book.dataset.indexValue = (myLibrary.length - 1);

  title.textContent = bookObj.title;
  author.textContent = `Author: ${bookObj.author}`;
  pages.textContent = `Pages: ${bookObj.pages}`;
  read.textContent = `Read: ${bookObj.read}`;
  removeButton.textContent = "REMOVE BOOK";

  book.appendChild(title);
  book.appendChild(author);
  book.appendChild(pages);
  book.appendChild(read);
  book.appendChild(removeButton);

  removeButton.addEventListener("click", () => {
    book.remove();
  })
}

const newBookButton = document.getElementById("new-book-button");
const removeBookButton = document.querySelectorAll("remove-book-button");
const modal = document.querySelector("dialog");
const modalSubmitButton = document.querySelector("#modal-submit-button");
const modelCancelButton = document.querySelector("#modal-cancel-button");

newBookButton.addEventListener("click", () => {
  modal.showModal();
});

modalSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");
  const readInput = document.querySelector("#read-select");
//   const regex = /^[0-9]*$/;

  const newBookObj = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.value
  );

  for (const [key, value] of Object.entries(newBookObj)) {
    if ((key !== "pages") & (value === "")) {
      alert("Please fill out all of the fields");
      return false;
    }
  }

  if ((pagesInput.value === "")) {
    alert("Please enter a valid page number");
    return false;
  }

  newBookObj.newBook();
  displayBooks(newBookObj);
  modal.close();
});

modelCancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.close();
});