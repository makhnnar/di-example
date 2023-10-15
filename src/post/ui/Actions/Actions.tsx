import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faComment, faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { ActionsData } from '../../data/ActionsData';

import './Actions.css';
import { useWallPresenter } from '../../../wall/ui/Wall';

interface ActionProps {
  actionsData: ActionsData,
  idPost: string
}

export const Actions = ({ actionsData,idPost }: ActionProps) => {
  const wallPresenter = useWallPresenter()
  return <div className='post-actions'>
      <ActionButton counter={actionsData.likes} icon={faThumbsUp} onClick={ ()=>{ 
        wallPresenter.modifyPostLikes(idPost) 
      } } />
      <ActionButton counter={actionsData.dislikes} icon={faThumbsDown} onClick={ ()=>{ } }/>
      <ActionButton counter={actionsData.comments} icon={faComment} onClick={ ()=>{ } }/>
  </div>;
}

interface ActionButtonProps {
  counter: string,
  icon: IconDefinition,
  onClick: () => void
}

const ActionButton = ({counter,icon,onClick}:ActionButtonProps) => {
  return <div className='post-actions'>
      <div className="post-button">
        <div className='button-text'>{counter}</div>
        <button className="button-icon" onClick={onClick}>
          <FontAwesomeIcon icon={icon} size={"2x"}/>
        </button>
      </div>
  </div>;
}