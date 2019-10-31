const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 4000;
const app = express();
const friends = [
    { id: 1, name: 'Shaun' },
    { id: 2, name: 'Megan' },
    { id: 3, name: 'Pere' },
]



app.use(express.json());
app.use(cors());

app.get('api/friends', (req, res, next) => {
    res.json(friends);
})

app.listen(port, () => {
    console.log(`Listening on ` + port)
})