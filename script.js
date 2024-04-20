const addBookButton = document.querySelector("#add_book_btn");
const modal = document.querySelector("dialog");
const closeForm = document.querySelector("#cancel_form");

modal.addEventListener("click", (e) =>
{
	const dialogDimensions = modal.getBoundingClientRect();
	if (
		e.clientX < dialogDimensions.left ||
		e.clientX > dialogDimensions.right ||
		e.clientY < dialogDimensions.top ||
		e.clientY > dialogDimensions.bottom
	)
		modal.close();
});

addBookButton.addEventListener("click", () =>
{
	modal.showModal();
});

closeForm.addEventListener("click", () =>
{
	modal.close();
});

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