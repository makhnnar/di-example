import React from 'react';
import { ContentData, PhotoContentData, TextContentData } from '../../data/ContentData';

import './Content.css';

interface ContentProps {
  contentData: ContentData
  onPostClick: () => void
}

export const Content = ({ contentData, onPostClick }: ContentProps) => {
  const postStyle = contentData instanceof TextContentData? 'post-content no-image' : 'post-content'
  return <div className={postStyle} onClick={onPostClick}>
    { contentData instanceof TextContentData? 
      <TextContent textContentData={(contentData as TextContentData).content}/> : 
      <PhotoContent photoContentData={(contentData as PhotoContentData).photos}/>
    }
  </div>
}

interface TextContentProps {
  textContentData: string
}

const TextContent = ({textContentData}:TextContentProps) => {
  return <p className='post-text'>{textContentData}</p>;
}

interface PhotoContentProps {
  photoContentData: string[]
}

const PhotoContent = ({photoContentData}:PhotoContentProps) => {
  return <img src={photoContentData[0]} className="post-image" />;
}