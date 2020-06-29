
const fetchBook = function () {
  const book = document.getElementById('searchRequest').value
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:'+book);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    data = JSON.parse(xhr.responseText)

    const title = document.createElement('p')
      document.getElementById("results").innerText = '';
      title.setAttribute("class", "title");
      title.innerText = data.items[0].volumeInfo.title
      document.getElementById("results").appendChild(title);
    const image = document.createElement('img')
      image.setAttribute("class", "image");
      image.src = data.items[0].volumeInfo.imageLinks.smallThumbnail
      document.getElementById("results").appendChild(image);

  }
}
document.getElementById('fetch').addEventListener('click', fetchBook)

const form = document.querySelector('form');
const booksearch = function (event) {
  event.preventDefault();
};
form.addEventListener('submit', booksearch);
