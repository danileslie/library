let myLibrary = []
let newBook;
let submit = document.getElementById('submit');
let form = document.getElementById('form-book');
let container = document.getElementById('container');
let close = document.getElementById('close');
let openPopup = document.getElementById('open-modal');
let newBookModal = document.querySelector('.new-book');

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
    let hr = document.createElement('hr');

    bookDiv.classList.add('box-test');

    titleDiv.classList.add('title');
    titleDiv.textContent = newBook.title;
    bookDiv.appendChild(titleDiv);

    authorDiv.classList.add('author');
    authorDiv.textContent = newBook.author;
    bookDiv.appendChild(authorDiv);

    bookDiv.appendChild(hr);

    pagesDiv.classList.add('pages');
    pagesDiv.textContent = `${newBook.pages} pages` ;
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
    if(title.value.length === 0 || author.value.length === 0 || pages.value.length === 0){
        return
    } else{
        newBook =  new Book(title, author, pages, read);
        myLibrary.push(newBook);
        console.table(myLibrary);
        createBookDiv();
        closeBooks(); 
        form.reset();
    }    
}

function closeBooks(){
form.style.display = 'none';
newBookModal.classList.remove('active');
}

function bookModal(){
form.style.display = 'flex';
newBookModal.classList.add('active');
}

openPopup.addEventListener('click',bookModal);
close.addEventListener('click', closeBooks)
submit.addEventListener('click', addBooks);
