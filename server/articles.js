const clone = require('clone')

const getData = token => {
    let data = db[token]

    if (data == null) {
        data = db[token] = clone(defaultData)
    }

    return data
}

const get = (token, id) => {
    return new Promise((res) => {
        const posts = getData(token)
        res(
            posts[id].deleted
            ? {}
            : posts[id]
        )
    })
}

const getAll = token => {
    return new Promise((res) => {
        const posts = getData(token)
        let keys = Object.keys(posts)
        let filtered_keys = keys.filter(key => !posts[key].deleted)
        res(filtered_keys.map(key => posts[key]))
    })
}

module.exports = {
    get,
    getAll
}