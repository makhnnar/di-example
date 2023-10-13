import React from 'react';
import { ContentData, PhotoContentData, TextContentData } from '../../data/ContentData';

import './Content.css';

interface ContentProps {
  contentData: ContentData
}

export const Content = ({ contentData }: ContentProps) => {
  console.log("is TextContentData? ",contentData instanceof TextContentData)
  return <div>
    {
      contentData instanceof TextContentData? 
      <TextContent textContentData={(contentData as TextContentData).content}/> : 
      <PhotoContent photoContentData={(contentData as PhotoContentData).photos}/>
    }
  </div>
}

interface TextContentProps {
  textContentData: string
}

const TextContent = ({textContentData}:TextContentProps) => {
  return <div className='post-content'>
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