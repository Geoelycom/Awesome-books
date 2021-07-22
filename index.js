//Creating the Book object
function Books(author, bookName, pages, status) {
	this.author = author;
	this.bookName = bookName;
	this.pages = pages;
	this.status = status;
	this.bookInfo = function () {
		return `the ${bookName} is written by ${author} it contains ${pages} and i ${status} `;
	}
}

const tableBody = document.querySelector('.tbody');
const form = document.querySelector('.form-body');
form.addEventListener('submit', renderFunction);

//Datastructure for storing available books in the UI
const libraryData = [
	{ author: 'james alen', bookName: 'As a man thinketh', pages: 789, status: 'read' },
	{ author: 'markle bloom', bookName: 'Love on the road', pages: 500, status: 'not read' },
	{ author: 'charles duhig', bookName: 'the power of habit', pages: 400, status: 'not read' },
	{ author: 'sarah bloomberg', bookName: 'a tail of two cities', pages: 340, status: 'read' }

]

//Function that creates the Books when a user inputs its in the ui
function displayBooks() {
	let key = 0;
	libraryData.forEach(books => {
		tableBody.innerHTML += `<tr id="${key}">
		<td>${books.bookName}</td>
		<td>${books.author}</td>
		<td>${books.status}</td>
		<td><button class="del btn-danger">Delete</button></td>
	</tr> `
		key++;
		const deleteItem = document.querySelectorAll('.del')
		console.log(deleteItem)
		deleteItem.forEach(item => {
			item.addEventListener('click', deleteBook);
		})

	})
}
displayBooks();

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
	tableBody.innerHTML = '';
	displayBooks()
}

//Delete Book
function deleteBook(e) {
	libraryData.splice(e.target.parentElement.parentElement.id, 1);
	tableBody.innerHTML = '';
	displayBooks()
}

const book1 = new Books('john doe', 'I love to play football');
const book2 = new Books('richard brandson', 'the way we understand how to make money', '250 pages', 'have not read this book yet');
book1.bookInfo();


