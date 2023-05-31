import React from 'react';
import './Comments.css';

const Comments = ({ user, comments, onCommentSubmit }) => {
  return (
    <div>
      <h2>Comments</h2>
      {user && <p>Welcome, {user.name}!</p>}
      <h3>Product Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>Username: {comment.username}</p>
          <p>Comment: {comment.comment}</p>
          <p>Rating: {comment.rating}/5</p>
          {comment.image && <img src={comment.image} alt="Comment" />}
        </div>
      ))}
      {user ? (
        <div>
          <h3>Add a Comment</h3>
          <textarea placeholder="Enter your comment" />
          <input type="number" min="1" max="5" placeholder="Enter rating" />
          <input type="file" accept="image/*" />
          <button onClick={onCommentSubmit}>Submit</button>
        </div>
      ) : (
        <p>Please log in to leave a comment.</p>
      )}
    </div>
  );
};

export default Comments;
