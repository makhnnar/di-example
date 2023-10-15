import React from 'react';
import { Publisher } from './Publisher/Publisher';
import { Content } from './Content/Content';
import { Actions } from './Actions/Actions';
import { PostData } from '../data/PostData';
import './Post.css';

interface Props {
  postData: PostData
}

export const Post = ({postData}:Props) => {
  return (
    <div className="post">
        <Publisher publisherData={postData.publisher}/>
        <Content contentData={postData.content}/>
        <Actions actionsData={postData.actions} idPost={postData.idPost}/>
    </div>
  );
}