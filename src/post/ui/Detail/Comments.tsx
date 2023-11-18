import React, { Component } from 'react';
import { CommentData } from '../../data/CommentData';

interface Props {
  comments: CommentData[]
}


const CommentList = ({comments}:Props) => {
    const handleLike = (id:string) => {
        
    };
    
    const handleDislike = (id:string) => {
        
    };
    
    return (
      <div>
        {comments.map((comment) => (
          <div key={comment.idComment} className="comment">
            <div className="comment-name">{comment.publisher.nickname}</div>
            <div className="comment-actions">
              <button
                className="like-button"
                onClick={() => handleLike(comment.idComment)}
              >
                Like ({comment.actions.likes})
              </button>
              <button
                className="dislike-button"
                onClick={() => handleDislike(comment.idComment)}
              >
                Dislike ({comment.actions.dislikes})
              </button>
            </div>
          </div>
        ))}
      </div>
    );
}

export default CommentList;