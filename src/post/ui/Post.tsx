import React from 'react';
import { Publisher } from './Publisher/Publisher';
import { Content } from './Content/Content';
import { Actions } from './Actions/Actions';

interface Props {
  postData: PostData
}

export const Post = ({postData}:Props) => {
  return (
    <div className="post">
        <Publisher publisherData={postData.publisher}/>
        <Content contentData={postData.content}/>
        <Actions actionsData={postData.actions}/>
    </div>
  );
}