import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img  alt="avatar" src={faker.image.image()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Kender B
        </a>
        <div className="metadata">
          <span className="date">
            Today at 10:00PM.
          </span>
        </div>
        <div className="text">
          Nice app here, men!
        </div>
      </div>
    </div>
  );
}
export default CommentDetail;