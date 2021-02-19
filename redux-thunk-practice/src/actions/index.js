import jsonPlaceholder from '../apis/jasonPlaceholder';

export const fetchPost = () =>  async dispatch => {
  const response = await jsonPlaceholder.get('/post');

  dispatch({type: 'FECTH_POSTS', payload: response})
}
