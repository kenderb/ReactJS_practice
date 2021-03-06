import _ from 'lodash';
import jasonPlaceholder from '../apis/jasonPlaceholder';

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_USER = 'FETCH_USER'

export const fetchPosts = () =>  async dispatch => {
  try {
    const response = await jasonPlaceholder.get('/posts');
    dispatch({type: FETCH_POSTS, payload: response.data})
  } catch (error) {
    console.log(error.messages);  
  }
  
}

export const fecthUser = id => dispatch => _fecthUser(id, dispatch);

const _fecthUser = _.memoize(async (id, dispatch) => {
  
  const response = await jasonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
  
});
