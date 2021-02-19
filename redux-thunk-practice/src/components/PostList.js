import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {Card} from 'react-bootstrap';
import { fetchPosts } from '../actions';

const PostList = ({ posts, fetchPosts }) => {

  useEffect(() => {
    fetchPosts();
  },[fetchPosts]);
  console.log(posts);
  return (
    <div>
      {posts.map(post => 
        <Card key={post.id} style={{margin: '1rem'}}>
          <Card.Body>
            <Card.Title as="h3">{post.title}</Card.Title>
            <Card.Text>
              {post.body}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>)
}

const mapStateToProps = (state) => {
  return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts } )(PostList);