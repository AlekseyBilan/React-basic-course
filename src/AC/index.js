export function increment () {
    return {
        type: 'INCREMENT'
    }
}

export function removeArticle(id) {
    return {
        type: 'DELETE_ARTICLE',
        payload: {id}
    }
}