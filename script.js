const addBookButton = document.querySelector("#add_book_btn");
const modal = document.querySelector("dialog");
const closeForm = document.querySelector("#cancel_form");
const form = document.querySelector("#book_form");

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

form.addEventListener("submit", (e) =>
{
	e.preventDefault();
	const newBook = new BookConstructor
	(
		e.target.querySelector("#title").value,
		e.target.querySelector("#author").value,
		parseInt(e.target.querySelector("#pages").value),
		e.target.querySelector("#read_status").checked ? true : false,
	);
	modal.close();
});

function BookConstructor(title, author, pages, read)
{
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}