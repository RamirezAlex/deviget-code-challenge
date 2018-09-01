import {
  GET_REDDIT_POSTS
} from '../reducers/redditReducer';

export const getRedditPosts = () => {
  /* fetch(`//api.reddit.com/top?limit=50`)
    .then(response => response.json())
    .then(json => {
      return {
        type: GET_REDDIT_POSTS,
        payload: json.data.children
      }
    });
  */
  return {
    type: GET_REDDIT_POSTS,
    payload: { posts: [] }
  }
}
