import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faComment, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { ActionsData } from '../../data/ActionsData';

import './Actions.css';

interface ActionProps {
  actionsData: ActionsData
}

export const Actions = ({ actionsData }: ActionProps) => {
  return <div className='post-actions'>
      <ActionButton counter={actionsData.likes} icon={faThumbsUp}/>
      <ActionButton counter={actionsData.dislikes} icon={faThumbsDown}/>
      <ActionButton counter={actionsData.comments} icon={faComment}/>
  </div>;
}

interface ActionButtonProps {
  counter: string,
  icon: IconDefinition
}

const ActionButton = ({counter,icon}:ActionButtonProps) => {
  return <div className='post-actions'>
      <div className="post-button">
        <div className='button-text'>{counter}</div>
        <button className="button-icon">
          <FontAwesomeIcon icon={icon} size={"2x"}/>
        </button>
      </div>
  </div>;
}