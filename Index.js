require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

const friends = [
    { id: 1, name: 'Shaun' },
    { id: 2, name: 'Megan' },
    { id: 3, name: 'Pere' },
    { id: 4, name: 'Ifiok' },
    { id: 5, name: 'Amira' },
    { id: 6, name: 'Oluwafemi' },
    { id: 7, name: 'Dom' },
    { id: 8, name: 'Martins' },
    { id: 9, name: 'Francis' },
    { id: 10, name: 'Evans' },
];

app.use(express.static(__dirname + '/client/build'))
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
});

app.get('/api/friends', (req, res) => {
    res.json(friends);
})

app.listen(port, () => {
    console.log(`Listening on ` + port)
});