//api fetch headers

const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body:'"aula": "Javascript"',
}

fetch(url, options)
.then(response => response.json())
.then(json => {
    console.log(json)
})

//puxando headers
const url2 = 'https://jsonplaceholder.typicode.com/posts/';
const options2 = {
    method: 'HEAD'
}

fetch(url2, options2)
.then(response => response.headers.forEach(console.log))