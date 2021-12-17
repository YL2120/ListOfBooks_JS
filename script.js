const bookList = document.querySelector(".book-list");
const bookForm = document.querySelector(".book-form");

class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    addBookToList(book){
        const row = document.createElement("tr"); //we create a new row to add a book;
        row.innerHTML= `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td><button class="delete">X</button></td>
        `; //we fill the columns of our row

        bookList.appendChild(row); //we add our row to the list
    }

}

bookForm.addEventListener('submit', (e) => { 
    e.preventDefault(); //on évite que le comportement par défaut(envoyer des données) se réalise et donc on évite la réactualisation de la page
    const title = document.getElementById("title").value;//on prend les valeurs des input.
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;

    const book = new Book(title,author,year); // on crée un nouvel objet book.

    book.addBookToList(book); // we add the book that we've just created
})
