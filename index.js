//console.log('hello world');
function Books(author, bookName, pages, status) {
	this.author = author;
	this.bookName = bookName;
	this.pages = pages;
	this.status = status;
	this.bookInfo = function () {
		return `the ${bookName} is written by ${author} it contains ${pages} and i ${status} `;
	}
	// bookInfo();
}
//Books.bookInfo();

const tableBody = document.querySelector('.tbody');
const form = document.querySelector('.form-body');
form.addEventListener('submit', renderFunction);

console.log(form);


const libraryData = [
	{ author: 'james alen', bookName: 'As a man thinketh', pages: 789, status: 'read' },
	{ author: 'markle bloom', bookName: 'Love on the road', pages: 500, status: 'not read' },
	{ author: 'charles duhig', bookName: 'the power of habit', pages: 400, status: 'not read' },
	{ author: 'sarah bloomberg', bookName: 'a tail of two cities', pages: 340, status: 'read' }

]

function displayBooks() {
	libraryData.forEach(books => {
		tableBody.innerHTML += `<tr>
		<td>${books.bookName}</td>
		<td>${books.author}</td>
		<td>${books.status}</td>
	</tr> `
		console.log(books)
	})
}
console.log(displayBooks());

let newBooks = { author: 'james alen', bookName: 'As a man thinketh', pages: 789, status: 'read' };
function renderFunction(e) {
	e.preventDefault();
	let elements = e.target.elements;
	// console.log(elements['title'].value);
	form.elements['title']
	newBooks.author = elements.author.value;
	newBooks.status = elements.books.value;
	newBooks.bookName = elements['title'].value;
	libraryData.unshift(newBooks)
	tableBody.innerHTML = '';
	displayBooks()
	console.log(libraryData)
	//console.log(newBooks);
}

const book1 = new Books('john doe', 'I love to play football');
const book2 = new Books('richard brandson', 'the way we understand how to make money', '250 pages', 'have not read this book yet');
book1.bookInfo();
console.log(book2.bookInfo());


// const input = document.querySelector('.title');

// const contentWrapper = document.createElement('p')
// const button = document.createElement('button');
// button.innerText = 'remove item';
// contentWrapper.appendChild(button);
// input.appendChild(contentWrapper);
// console.log(input);

// const formBody = document.querySelector('input');

// for (book in newBooks){

// }
