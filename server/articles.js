const clone = require('clone')

let db = {}

const defaultData = [
    {
        id: 1,
        timestamp: 1518322778000,
        title: 'How to build a Realtime Graph using JavaScript and Pusher',
        description: 'The world needs everything uber-fast now. There are plenty of data streams being generated by different systems every day. They serve in making decisions in many industries. Realtime monitoring and analysis have become very important today. Data streams include realtime monitoring of website traffic, server performance, weather updates, and IOT sensors. It is important to analyze and interpret this burst of data, for which interactive charts and graphs are an excellent solution.',
        author: 'Rahat Khanna',
        category: 'javascript',
        voteUp: 6,
        voteDown: 2,
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
        voteUp: 3,
        voteDown: 1,
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

const vote = (token, id, option) => {
    return new Promise((res) => {
        let posts = getData(token)
        post = posts[id]
        switch(option) {
            case "upVote":
                post.voteScore = post.voteScore + 1
                break
            case "downVote":
                post.voteScore = post.voteScore - 1
                break
            default:
                console.log(`posts.vote received incorrect parameter: ${option}`)
        }
        res(post)
    })
}

module.exports = {
    get,
    getAll,
    vote
}