import jasonPlaceholder from '../apis/jasonPlaceholder';

export const FETCH_POSTS = 'FETCH_POSTS'

export const fetchPosts = () =>  async dispatch => {
  const response = await jasonPlaceholder.get('/posts');

  dispatch({type: FETCH_POSTS, payload: response.data})
}
