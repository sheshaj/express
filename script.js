var express = require('express');
var app = express();
var cors = require('cors');
app.use(express.json());

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

var books = [
    { title: 'Harry Potter', id: 1 },
    { title: 'Twilight', id: 2 },
    { title: 'Lorien Legacies', id: 3 }
]

app.get('/books', cors(corsOptions), (req, res) => {
    res.status(200).json(books);
    // res.send(JSON.parse(books));
})

app.post('/add', (req, res) => {
    const book = {
        title: req.body.title,
        id: books.length + 1
    }
    books.push(book);
    res.send('Book added successfully');
})

// start the server
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Ready on port:' + port);
})


// const express = require('express');
// const request = require('request');

// const app = express();

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

// app.get('/jokes/random', (req, res) => {
//     request(
//         { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
//         (error, response, body) => {
//             if (error || response.statusCode !== 200) {
//                 return res.status(500).json({ type: 'error', message: err.message });
//             }

//             res.json(JSON.parse(body));
//         }
//     )
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));