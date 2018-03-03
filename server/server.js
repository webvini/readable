require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

const categories = require('./categories');
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

app.get('/categories', (req, res) => {
    categories.getAll(req.token)
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

app.get('/articles', (req, res) => {
    articles.getAll(req.token)
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

app.post('/articles', bodyParser.json(), (req, res) => {
    articles.add(req.token, req.body)
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

app.post('/articles/:id', bodyParser.json(), (req, res) => {
    const { option } = req.body
    const id = req.params.id
    articles.vote(req.token, id, option)
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