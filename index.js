//Creating the Book object
function Books(author, bookName, pages, status) {
	this.author = author;
	this.bookName = bookName;
	this.pages = pages;
	this.status = status;
}

Books.prototype.bookInfo = function () {
	return `${this.author} is the author who wrote ${this.bookName} it contains ${this.pages} and i ${this.status} `;
}


const tableBody = document.querySelector('.tbody');
const form = document.querySelector('.form-body');
form.addEventListener('submit', renderFunction);

//Data structure for storing available books in the UI
let libraryData = [
	{ author: 'james alen', bookName: 'As a man thinketh', pages: 789, status: 'read' },
	{ author: 'markle bloom', bookName: 'Love on the road', pages: 500, status: 'not read' },
	{ author: 'charles duhig', bookName: 'the power of habit', pages: 400, status: 'not read' },
	{ author: 'sarah bloomberg', bookName: 'a tail of two cities', pages: 340, status: 'read' }

]

//Function that creates the Books when a user inputs its in the ui
function displayBooks() {
	let newData = getItem()
	let key = 0;
	newData.forEach(books => {
		tableBody.innerHTML += `<tr id="${key}">
		<td>${books.bookName}</td>
		<td>${books.author}</td>
		<td>${books.status}</td>
		<td><button class="del btn-danger">Delete</button></td>
	</tr> `
		key++;
		const deleteItem = document.querySelectorAll('.del')
		deleteItem.forEach(item => {
			item.addEventListener('click', deleteBook);
		})

	})
}


//Create a function that render's book to the UI
function renderFunction(e) {
	let newBooks = {};
	e.preventDefault();
	let elements = e.target.elements;
	form.elements.title;
	newBooks.author = elements.author.value;
	newBooks.status = elements.books.value;
	newBooks.bookName = elements.title.value;
	libraryData.unshift(newBooks)
	console.log(libraryData)
	saveData()
	tableBody.innerHTML = '';
	displayBooks()
}

//Delete Book
function deleteBook(e) {
	libraryData.splice(e.target.parentElement.parentElement.id, 1);
	tableBody.innerHTML = '';
	saveData()
	displayBooks()

}

// Set Books to local storage
function saveData() {
	localStorage.setItem('libraryData', JSON.stringify(libraryData))
}

function checkStorage() {
	if (getItem()) {
		libraryData = getItem()
		displayBooks();
	} else {
		saveData()
		displayBooks()
	}
}
checkStorage()

//recieve info saved in local storage
function getItem() {
	return JSON.parse(localStorage.getItem('libraryData'))
}


const book1 = new Books('john doe', 'I love to play football');
const book2 = new Books('richard brandson', 'the way we understand how to make money', '250 pages', 'have not read this book yet');
console.log(book2)