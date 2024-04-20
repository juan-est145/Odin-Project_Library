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
		e.target.querySelector("#pages").value,
		e.target.querySelector("#read_status").checked ? true : false,
	);
	const bookCard = CardElementConstructor(newBook);
	document.querySelector("main").appendChild(bookCard);
	modal.close();
});

function BookConstructor(title, author, pages, read)
{
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function CardElementConstructor(bookObject)
{
	const title = document.createElement("p");
	const author = document.createElement("p");
	const pages = document.createElement("p");
	const read = document.createElement("button");
	const remove = document.createElement("button");

	title.textContent = bookObject.title;
	author.textContent = bookObject.author;
	pages.textContent = `${bookObject.pages} pages`;
	read.textContent = bookObject.read === true ? "Read" : "Not read";
	remove.textContent = "Remove";

	const card = document.createElement("div");
	card.className = "card_container";
	
	card.appendChild(title);
	card.appendChild(author);
	card.appendChild(read);
	card.appendChild(remove);
	return (card);
}