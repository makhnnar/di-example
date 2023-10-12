import React from 'react';

interface Props {
  actionsData: ActionsData
}

export const Actions = ({ actionsData }: Props) => {
  return <div>
      <button className="like-button">
          <i className="far fa-heart"></i>
      </button>
      <button className="comment-button">
        <i className="far fa-comment"></i>
      </button>
  </div>;
}