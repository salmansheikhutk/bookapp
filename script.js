// A constructor for making books

const myLibrary = []

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
    myLibrary.push(book1);
    myLibrary.push(book2)
}

const book1 = new Book('Anxious Gen', 'Dr', '400', 'Reading')
const book2 = new Book('That Gen', 'Dr', '200', 'Completed')
// book1.saytitle()
// book1.info()
// console.log(book1.returninfo())

// console.log(Object.getPrototypeOf(book1) === Book.prototype)
// console.log(Book.prototype)

function showPrompt () {
    var name = prompt('Book Name?')
    var author = prompt('Author')
}

const Btn = document.getElementById("new-book")
const confirmBtn = document.getElementById("confirmBtn")

Btn.addEventListener("click", () => {
    dialog.showModal();
})

addBookToLibrary()

confirmBtn.addEventListener("click", () => {
    console.log(myLibrary);
})


function populateHtml (book) {
    const bookDiv = document.createElement("div")
    bookDiv.className = "thisbook"
    const mybook = document.createElement("p")
    const mybookB = document.createElement("p")
    const mybookC = document.createElement("p")
    const mybookD = document.createElement("p")
    const button = document.createElement("button")
    const button2 = document.createElement("button")

    mybook.innerText = "Name: " + book.title
    bookDiv.append(mybook)
    mybookB.innerText = "Author: " + book.author
    bookDiv.append(mybookB)
    mybookC.innerText = "Pages: " + book.pages
    bookDiv.append(mybookC)
    mybookD.innerText = "Status: " + book.status
    bookDiv.append(mybookD)

    button.innerText = "Remove"
    button.addEventListener("click", () => {
        bookDiv.remove()
        // console.log(book.title)
        myLibrary.pop(book.title)
        // Remove it from myLibrary array also
        

    })

    button2.innerText = "Change Status"
    button2.addEventListener("click", () => {
        if (book.status === "Reading") {
            book.status = "Completed"
            mybookD.innerText = "Status: " + book.status
        } else {
            book.status = "Reading"
            mybookD.innerText = "Status: " + book.status
        }
    }
    

)
    bookDiv.append(button)
    bookDiv.append(button2)
    return bookDiv
}

// populateHtml()

function creatediv () {
    const booksContainer = document.getElementById("mybooks")
    myLibrary.forEach(book => {
        booksContainer.appendChild(populateHtml(book))
    })    
        

}

creatediv()