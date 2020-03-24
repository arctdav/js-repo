import { ADD_ARTICLE, DELETE_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        // console.log(Object.assign({}, state, {
        //     articles: state.articles.concat(action.payload)
        // }));
        // console.log(state);
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    else if (action.type === DELETE_ARTICLE) {
        const idx = state.articles.findIndex((ele) => {
            //console.log(action.payload);
            return ele.title === action.payload});
        if (idx === -1) {
            alert("DELETE_ARTICLE ERROR: idx === -1")
        } else {
            const tempArticles = state.articles.filter((x) => (x.title != action.payload));
            // return tempState;
            console.log(tempArticles);
            return { articles: tempArticles };
        }
    }
    return state;
};

export default rootReducer;