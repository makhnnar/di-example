import React, { Component } from 'react';

const CommentList = () => {
    const handleLike = (id:string) => {
        
    };
    
    const handleDislike = (id:string) => {
        
    };
    
    return (
      <div>
        {this.state.comments.map((comment) => (
          <div key={comment.id} className="comment">
            <div className="comment-name">{comment.publisher}</div>
            <div className="comment-actions">
              <button
                className="like-button"
                onClick={() => this.handleLike(comment.id)}
              >
                Like ({comment.likes})
              </button>
              <button
                className="dislike-button"
                onClick={() => this.handleDislike(comment.id)}
              >
                Dislike ({comment.dislikes})
              </button>
            </div>
          </div>
        ))}
      </div>
    );
}

export default CommentList;
