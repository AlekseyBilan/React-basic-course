import {articles as defaultArticles} from '../fixtures';

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'DELETE_ARTICLE': return articleState.filter(article => article.id !== payload.id)
    }

    return articleState;
}