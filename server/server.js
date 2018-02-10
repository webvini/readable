require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

const articles = require('./articles');

const app = express();

app.use(express.static('public'));
app.use(cors());

app.use((req, res, next) => {
    const token = req.get('Authorization')

    if (token) {
        req.token = token
        next()
    } else {
        res.status(403).send({
            error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
        })
    }
});

app.post('/articles', bodyParser.json(), (req, res) => {
    posts.add(req.token, req.body)
      .then(
            (data) => res.send(data),
            (error) => {
                console.error(error)
                res.status(500).send({
                    error: 'There was an error.'
                })
            }
        )
})

app.listen(config.port, () => {
    console.log('Server listening on port %s, Ctrl+C to stop', config.port)
})