let books = ["اثر مرکب ", "قدرت عادت", "قلعه ی حیوانات", "خودت را به فنا نده"];
let bookParent = document.querySelector("#book-list ul");

// let ul = document.createElement("ul");

function fetchBooks(searchedBook) {
  let getBooks = searchedBook === undefined ? books : searchedBook;
  bookParent.innerHTML = "";

  for (let index = 0; index < getBooks.length; index++) {
    let lis = document.createElement("li");
    let title = document.createElement("span");
    let deleteButton = document.createElement("span");
    lis.setAttribute("item-id", index);
    deleteButton.innerHTML = "حذف";
    deleteButton.classList = "delete";
    title.innerHTML = `${getBooks[index]}`;
    title.classList = "name";
    lis.appendChild(deleteButton);
    lis.appendChild(title);
    bookParent.appendChild(lis);
    bookParent.appendChild(lis);
  }
  let booksLis = bookParent.querySelectorAll("li");

  for (let index = 0; index < booksLis.length; index++) {
    booksLis[index].addEventListener("click", function (e) {
      e.preventDefault();
      e.target.parentNode.remove();
      deleteFunction(this.getAttribute("item-id"));
    });
  }
}

function deleteFunction(itemId) {
  books.splice(books.indexOf(itemId) + 1, 1);
  console.log(books);
  fetchBooks();
}

let addBookBtn = document.querySelector("#add-book a");

addBookBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let addBookInputVal = document.querySelector("#add-book input").value;

  books.push(addBookInputVal);
  fetchBooks();
});

let searchInput = document.querySelector('#search-books input[type="text"]');
searchInput.addEventListener("keyup", function (e) {
  if (searchInput.value === "") {
    return fetchBooks();
  }
  let flt = books.filter((item) => item.includes(searchInput.value));

  fetchBooks(flt);
});

fetchBooks();
