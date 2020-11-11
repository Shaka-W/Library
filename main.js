const form = document.querySelector('form');
const bookName = document.querySelector('#book-name');
const authorName = document.querySelector('#author-name');
const numOfPages = document.querySelector('#number-of-pages');
const tableBody = document.querySelector('tbody');

const radioBtn = document.querySelectorAll('input[name="trueOrFalse"]');
const addBookBtn = document.querySelector('.btn-add');
const submitBtn = document.querySelector('.btn-submit');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks(myLibrary);
}

function createBookRow(bookTitle, bookAuthor, bookPages, readBook) { 
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');

    let deleteBtn = document.createElement('i');
    deleteBtn.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'icon', 'fas', 'fa-trash');

    deleteBtn.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.remove();
    });

    td1.appendChild(bookTitle);
    td2.appendChild(bookAuthor);
    td3.appendChild(bookPages);
    td4.appendChild(readBook);
    td5.appendChild(deleteBtn)
 
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
 
    tableBody.appendChild(tr);
}

function displayBooks(myLibrary) {
    let bookTitle;
    let bookAuthor;
    let bookPages;
    let readBook;

    myLibrary.forEach((book) => {
         bookTitle = document.createTextNode(book.title);
         bookAuthor = document.createTextNode(book.author);
         bookPages = document.createTextNode(book.pages);
         readBook = document.createTextNode(book.read);
   });

   createBookRow(bookTitle, bookAuthor, bookPages, readBook);

   form.reset();
}

submitBtn.addEventListener('click', () => {
    let bookRead;

    for (let i = 0; i < radioBtn.length; i++) {
        if (radioBtn[i].checked) {
            bookRead = radioBtn[i].value;
            break;
        } else if (radioBtn[i].value === undefined) {
            alert('Check one for read or not read!');
            return;
        }
    }

    const book = new Book(bookName.value, authorName.value, numOfPages.value, bookRead);
    addBookToLibrary(book);
});