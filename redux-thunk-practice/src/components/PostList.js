import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const PostList = ({ posts, fetchPosts }) => {

  useEffect(() => {
    fetchPosts();
  },[]);

  return (
    <div>
      {posts.map(post => <div key={post.id}>{post.title}</div>)}
    </div>)
}

const mapStateToProps = (state) => {
  return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts } )(PostList);