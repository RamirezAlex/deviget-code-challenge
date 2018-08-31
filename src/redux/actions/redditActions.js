import {
  GET_REDDIT_POSTS
} from '../actions/redditReducer';

export const getRedditPosts = () => {
  let data = {};
  return {
    type: GET_REDDIT_POSTS,
    payload: data
  }
}
