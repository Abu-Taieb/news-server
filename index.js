const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const categories = require('./Data/categories.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Dragon is running')
})

app.get('/catagories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log(`Dragon API is running in port ${port}`);
})