const api = 'http://localhost:3001'

const headers = {
    'Accept': 'application/json',
    'Authorization': 'free',
    'Content-Type': 'application/json'
}

export const getAllArticles = () => {
    fetch(`${api}/articles`, { headers }).then(
        res => res.json()
    )
}