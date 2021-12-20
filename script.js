const bookList = document.querySelector(".book-list");
const bookForm = document.querySelector(".book-form");
const container = document.querySelector(".container");

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

    clearFields(){
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("year").value = "";
    }

    showAlert(message,className){
        const alert = document.createElement("div"); // on crée une div 
        alert.className = `alert ${className}`; //ajout nom de la classe à la div
        alert.appendChild(document.createTextNode(message)); //"createTextnode" : va créér un noeud dans le DOM. Ici on ajoute à la div du texte à l'intérieur
        container.insertBefore(alert, bookForm); // finalement, on ajoute notre div à container

        setTimeout(() => {
            document.querySelector('.alert').remove(); // on sélectionne l'élément avec le nom de classe alert et on le supprime
        },2500)
    }

}

class Interface{ //classe utilitaire où il n y a que des méthodes
    deleteBook(target){
        if(target.className === "delete"){ //si l'élément que je viens de cliquer a la classe "delete"
            target.parentElement.parentElement.remove(); // alors on supprime son grand-père : td est le parent, tr est le grand père
        }
    }
}

bookForm.addEventListener('submit', (e) => { 
    e.preventDefault(); //on évite que le comportement par défaut(envoyer des données) se réalise et donc on évite la réactualisation de la page
    const title = document.getElementById("title").value;//on prend les valeurs des input.
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;

    const book = new Book(title,author,year); // on crée un nouvel objet book.

    if(title === "" || author === "" || year === "" ){
        book.showAlert('The fields cannot be empty !', "error");
    } else{
        book.addBookToList(book); // we add the book that we've just created
        book.clearFields(); //les inputs redeviennent vides.
        book.showAlert('Book successfully added', "success");
    }
    
})

bookList.addEventListener("click", (e) => {
    const ui = new Interface();
    ui.deleteBook(e.target);
})