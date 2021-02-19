import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import {Card, Spinner} from 'react-bootstrap';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

const PostList = ({ posts, fetchPosts }) => {
  const displaySpinner = () => (
    <div className="d-flex justify-content-center mt-4">
      <Spinner animation="border" /> 
    </div>
  );
  
  useEffect(() => {
    fetchPosts();
  },[fetchPosts]);
  
  const displayPosts = () => (
    posts.map(post => 
      <Card key={post.id} style={{margin: '1rem'}}>
        <Card.Body>
          <Card.Title as="h3">{post.title}</Card.Title>
          <Card.Text>
            {post.body}
          </Card.Text>
          <UserHeader userId = {post.userId}  key={post.id}/>
        </Card.Body>
      </Card>
    )
  );
  return (
    <div>
      {posts.length === 0 ? displaySpinner() : displayPosts()}
    </div>)
}

const mapStateToProps = (state) => {
  return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts } )(PostList);