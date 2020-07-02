const fetchBook = function () {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    const cover = document.createElement('img');
    const description = document.createElement('p');

    const data = JSON.parse(xhr.responseText);

    description.innerHTML = data.items[0]['volumeInfo']['description'];
    cover.src = data.items[0]['volumeInfo']['imageLinks']['thumbnail'];
    document.body.appendChild(cover);
    document.body.appendChild(description);
  };

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ document.getElementById("title").value }`)
  xhr.send()
};

document.getElementById('fetch').addEventListener('click', fetchBook);
