export const GET_REDDIT_POSTS = 'deviget/reddit/GET_REDDIT_POSTS';

const redditReducer = (state = { redditPost: [] }, action) => {
  switch(action.type) {
    case GET_REDDIT_POSTS:
      console.log(action.payload);
      return Object.assign({}, state, { redditPost: [] })
    default:
      return state;
  }
}

export default redditReducer;
