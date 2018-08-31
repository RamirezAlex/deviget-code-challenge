export const GET_REDDIT_POSTS = 'deviget/reddit/GET_REDDIT_POSTS';

const redditReducer = (state, action) => {
  switch(action.type) {
    case GET_REDDIT_POSTS: 
      console.log('reducer: redditReducer');
      return Object.assign({}, state, { reddit: [] })
    default:
      return state;
  }
}

export default redditReducer;
