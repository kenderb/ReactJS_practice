import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

const PostList = ({ fetchPost }) => {

  useEffect(() =>{
    fetchPost();
  }, [fetchPost]);

  return <div>Post list</div>
}

export default connect(null, { fetchPost } )(PostList);