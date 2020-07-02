const fetchBook = function (book) {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:'+book);
    xhr.send();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState !==4) return;
        const data = JSON.parse(xhr.responseText);

        const title = document.createElement('p');
        title.innerHTML = data.items[0].volumeInfo.title;

        const author = document.createElement('p');
        author.innerHTML = data.items[0].volumeInfo.authors[0];

        const cover = document.createElement('img');
        cover.src = data.items[0].volumeInfo.imageLinks.thumbnail;

        document.body.appendChild(title);
        document.body.appendChild(author);
        document.body.appendChild(cover);
    }
    
}

document.getElementById('search-btn').addEventListener('click', function () {
    fetchBook(document.getElementById('search-field').value);
});
