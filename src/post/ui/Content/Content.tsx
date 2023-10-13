import React from 'react';
import { ContentData, PhotoContentData, TextContentData } from '../../data/ContentData';

import './Content.css';

interface ContentProps {
  contentData: ContentData
}

export const Content = ({ contentData }: ContentProps) => {
  return contentData instanceof TextContentData? 
      <TextContent textContentData={(contentData as TextContentData).content}/> : 
      <PhotoContent photoContentData={(contentData as PhotoContentData).photos}/>
}

interface TextContentProps {
  textContentData: string
}

const TextContent = ({textContentData}:TextContentProps) => {
  return <div className='post-content no-image'>
      <p className='post-text'>{textContentData}</p>
  </div>;
}

interface PhotoContentProps {
  photoContentData: string[]
}

const PhotoContent = ({photoContentData}:PhotoContentProps) => {
  return <div className='post-content'>
      <img src={photoContentData[0]} className="post-image" />
  </div>;
}