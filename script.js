const harryPotter = new BookConstructor("El caliz de fuego", "J.K Rowling", 500, true);
const confucio = new BookConstructor("Los cuatro libros clásicos", "Confucio y cía", 325, false);

console.log(harryPotter.info());
console.log(confucio.info());

function BookConstructor(title, author, pages, read)
{
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = () =>
	{
		return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.read}`;
	};
}