//console.log('hello world');
function Books(author, bookName, pages, read) {
	this.author = author;
	this.bookName = bookName;
	this.pages = pages;
	this.read = read;
	this.bookInfo = function () {
		return `the ${bookName} is written by ${author} it contains ${pages} and i ${read} `;
	}
	// bookInfo();
}
//Books.bookInfo();



const book1 = new Books('john doe', 'I love to play football');
const book2 = new Books('richard brandson', 'the way we understand how to make money', '250 pages', 'have not read this book yet');
book1.bookInfo();
console.log(book2.bookInfo());
