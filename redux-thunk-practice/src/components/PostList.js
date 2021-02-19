import React, { useEffect } from 'react';
import { connet } from 'react-redux';
import { fetchPost } from '../actions';

const PostList = ({ fetchPost }) => {

  useEffect(() =>{
    fetchPost();
  }, [fetchPost]);

  return <div>Post list</div>
}

export default connet(null, { fetchPost } )(PostList);