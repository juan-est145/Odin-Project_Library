const addBookButton = document.querySelector("#add_book_btn");
const modal = document.querySelector("dialog");
const closeForm = document.querySelector("#cancel_form");
const form = document.querySelector("#book_form");

document.querySelector("main").addEventListener("click", (e) =>
{
	if (e.target.className === "read_book")
	{
		e.target.className = "not_read_book";
		e.target.textContent = "Not read";
	}
	else if (e.target.className === "not_read_book")
	{
		e.target.className = "read_book";
		e.target.textContent = "Read";
	}
});

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
	const bookCard = CreateCardElement(newBook);
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

function CreateCardElement(bookObject)
{
	const card_properties = 
	{
		title : document.createElement("p"),
		author :  document.createElement("p"),
		pages : document.createElement("p"),
		read : document.createElement("button"),
		remove : document.createElement("button")
	};

	card_properties.title.textContent = bookObject.title;
	card_properties.author.textContent = bookObject.author;
	card_properties.pages.textContent = `${bookObject.pages} pages`;
	if (bookObject.read === true)
	{
		card_properties.read.textContent = "Read";
		card_properties.read.className = "read_book";
	}
	else
	{
		card_properties.read.textContent = "Not read";
		card_properties.read.className = "not_read_book";
	}
	card_properties.remove.textContent = "Remove";

	const card = document.createElement("div");
	card.className = "card_container";
	for (const key in card_properties)
		card.appendChild(card_properties[key]);
	return (card);
}