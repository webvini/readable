const clone = require('clone')

let db = {}

const defaultData = [
    {
        id: 1,
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        description: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2
    },
    {
        id: 2,
        timestamp: 1467166872634,
        title: 'Lorem ipsum BACON',
        description: 'I have no idea.',
        author: 'vinicius',
        category: 'redux',
        voteScore: 6,
        deleted: false,
        commentCount: 2
    }
]

const getData = token => {
    let data = db[token]

    if (data == null) {
        data = db[token] = clone(defaultData)
    }

    return data
}

const get = (token, id) => {
    return new Promise((res) => {
        const articles = getData(token)
        res(
            articles[id].deleted
            ? {}
            : articles[id]
        )
    })
}

const getAll = token => {
    return new Promise((res) => {
        const articles = getData(token)
        let keys = Object.keys(articles)
        let filtered_keys = keys.filter(key => !articles[key].deleted)
        res(filtered_keys.map(key => articles[key]))
    })
}

module.exports = {
    get,
    getAll
}