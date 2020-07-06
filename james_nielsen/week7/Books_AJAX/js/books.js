console.log('AJAX');

const fetchBook = function () {
  const book = document.getElementById('bookSearch').value
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
      image.setAttribute("class", "bookCover");
      image.src = data.items[0].volumeInfo.imageLinks.smallThumbnail
      document.getElementById("results").appendChild(image);
    const rating = document.createElement('p')
      rating.setAttribute("class", "rating");
      rating.innerText = data.items[0].volumeInfo.averageRating
      document.getElementById("results").appendChild(rating);
  }
}
document.getElementById('button').addEventListener('click', fetchBook)
