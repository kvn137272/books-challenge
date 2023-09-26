let books = JSON.parse(localStorage.getItem("books")) || [];

let addBookBtn = document.querySelector("#add-book .button");
let searchInp = document.querySelector("#search-books input");

let hideCheckBox = document.querySelector("#hide input[type=checkbox]");
// get all books
let bookParent = document.querySelector("#book-list ul");

fetchBooks();

function fetchBooks(filtered) {

  bookParent.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    let lis = document.createElement("li");
    let title = document.createElement("span");
    let deleteButton = document.createElement("span");
    lis.setAttribute("item-id", i);
    lis.style.display = "block";
    deleteButton.innerHTML = "حذف";
    deleteButton.classList = "delete";
    title.innerHTML = `${books[i]}`;
    title.classList = "name";
    lis.appendChild(deleteButton);
    lis.appendChild(title);
    bookParent.appendChild(lis);
    bookParent.appendChild(lis);

    // delete book section
    deleteButton.addEventListener("click", function (e) {
      let itemId = this.parentElement.getAttribute("item-id");
      this.parentElement.remove();
      deleteBook(itemId);
    });
  }
}

//   console.log(bookLstParent);

function deleteBook(item) {
  books.splice(books.indexOf(item), 1);
  localStorage.setItem("books", JSON.stringify(books));
}

// add book section

addBookBtn.addEventListener("click", function (e) {
  let addBookInp = document.querySelector("#add-book input[type=text]").value;
  books.push(addBookInp);
  localStorage.setItem("books", JSON.stringify(books));
  fetchBooks();
});

//search books section

searchInp.addEventListener("keyup", function () {
  let ntFound = document.querySelector("#page-banner p");
  for (const li of bookParent.children) {
    li.style.display = "none";
    if (li.querySelector(".name").textContent.includes(this.value)) {
      li.style.display = "block";
      ntFound.style.display = "none";
    } else {
      ntFound.style.display = "block";
      ntFound.innerHTML = "Not Found!";
    }
  }
});

//hide books section

hideCheckBox.addEventListener("change", function (e) {
  let activity = e.target.checked ? "none" : "block";
  bookParent.style.display = activity;
});
