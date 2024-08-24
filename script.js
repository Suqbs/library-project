const myLibrary = [];

class Book {
  constructor(title, author, pages, read)
  {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  newBook() {
    addBookToLibrary(this);
  }

  toggleRead(checkbox) {
    return checkbox.checked ? "Read" : "Not Read Yet";
  }
}

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
  const readContainer = document.createElement("div");
  const readLabel = document.createElement("label");
  const readCheckbox = document.createElement("input");
  const removeButton = document.createElement("button");

  removeButton.setAttribute("id", "remove-book-button");

//   readLabel.setAttribute("for", "read");
//   readCheckbox.setAttribute("id", "read"); //This causes a problem because we are using same id for all labes
  readCheckbox.setAttribute("type", "checkbox");
  readCheckbox.setAttribute("name", "read-toggle");

  readContainer.classList.add("flex-label");
  readCheckbox.classList.add("read-checkbox");
  book.classList.add("card");

  title.textContent = bookObj.title;
  author.textContent = `Author: ${bookObj.author}`;
  pages.textContent = `Pages: ${bookObj.pages}`;
  readLabel.textContent = `${bookObj.read}`;
  removeButton.textContent = "REMOVE BOOK";

  if (readLabel.textContent === "Read") readCheckbox.checked ^= 1;

  readContainer.appendChild(readLabel);
  readContainer.appendChild(readCheckbox);

  book.appendChild(title);
  book.appendChild(author);
  book.appendChild(pages);
  book.appendChild(readContainer);
  book.appendChild(removeButton);

  bookContainer.appendChild(book);

  removeButton.addEventListener("click", () => {
    book.remove();
  });

  readCheckbox.addEventListener("change", (e) => {
    bookObj.read = bookObj.toggleRead(e.target);
    readLabel.textContent = bookObj.toggleRead(e.target);
  });
}

const newBookButton = document.getElementById("new-book-button");
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

  if (pagesInput.value === "") {
    alert("Please enter a valid page number");
    return false;
  }

  newBookObj.newBook();
  displayBooks(newBookObj);
  modal.close();

  const defaultReadOption = readInput.querySelector("option[selected]");

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.value = defaultReadOption.value;
});

modelCancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.close();
});
