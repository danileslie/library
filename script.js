let myLibrary = []
let newBook;
let submit = document.getElementById('submit');
let form = document.getElementById('form-book');
let container = document.getElementById('container');

function Book(title, author, pages, read){
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.checked;
}

function createBookDiv(){ 
    let bookDiv = document.createElement('div');
    let titleDiv = document.createElement('div');
    let authorDiv = document.createElement('div');
    let pagesDiv = document.createElement('div');
    let readButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    bookDiv.classList.add('box-test');

    titleDiv.classList.add('title');
    titleDiv.textContent = newBook.title;
    bookDiv.appendChild(titleDiv);

    authorDiv.classList.add('author');
    authorDiv.textContent = newBook.author;
    bookDiv.appendChild(authorDiv);

    pagesDiv.classList.add('pages');
    pagesDiv.textContent = newBook.pages;
    bookDiv.appendChild(pagesDiv);

    readButton.classList.add('round');
    readButton.setAttribute('type', 'checkbox');
    readButton.textContent = 'read';
    bookDiv.appendChild(readButton);

    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    bookDiv.appendChild(deleteButton);

    container.appendChild(bookDiv);

    function toggleRead(){
        if (newBook.read){
            newBook.read = false;
            readButton.classList.add('read');
            readButton.classList.remove('unread');
            readButton.innerText = 'Read';
        } else {
            newBook.read = true;
            readButton.classList.remove('read');
            readButton.classList.add('unread');
            readButton.innerText = 'Not Read';
        }
    } 
    toggleRead();

    readButton.addEventListener('click', toggleRead);
      
    deleteButton.addEventListener('click', function(){
        myLibrary.splice(bookDiv, 1);
        container.removeChild(bookDiv);
    });
}

function addBooks(){
    newBook =  new Book(title, author, pages, read);
    myLibrary.push(newBook);
    form.reset();
    console.table(myLibrary);
    createBookDiv();   
}


submit.addEventListener('click', addBooks);