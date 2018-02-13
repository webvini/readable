const clone = require('clone')

let db = {}

const defaultData = [
    {
        id: 1,
        title: 'First article',
        description: 'Lorem ipsum bacon'
    },
    {
        id: 2,
        title: 'Second article',
        description: 'I love bacon'
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