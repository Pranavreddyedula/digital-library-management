async function addBook() {
  const book = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    category: document.getElementById("category").value,
    copies: document.getElementById("copies").value
  };

  await fetch("/admin/add-book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book)
  });

  alert("Book added successfully");
}

async function loadBooks() {
  const res = await fetch("/admin/books");
  const books = await res.json();

  const list = document.getElementById("bookList");
  list.innerHTML = "";

  books.forEach(book => {
    const li = document.createElement("li");
    li.innerText = `${book.title} - ${book.author} (${book.category})`;
    list.appendChild(li);
  });
}
