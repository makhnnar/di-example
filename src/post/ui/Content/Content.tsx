import React from 'react';

interface ContentProps {
  contentData: ContentData
}

export const Content = ({ contentData }: ContentProps) => {
  return contentData instanceof TextContent ? <TextContent textContentData={(contentData as TextContent)}/> : <PhotoContent photoContentData={(contentData as PhotoContent)}/>;
}

interface TextContentProps {
  textContentData: TextContent
}

const TextContent = ({textContentData}:TextContentProps) => {
  return <div>
      <p>{textContentData.content}</p>
  </div>;
}

interface PhotoContentProps {
  photoContentData: PhotoContent
}

const PhotoContent = ({photoContentData}:PhotoContentProps) => {
  return <div>
      <img src={photoContentData.photos[0]} className="post-image" />
  </div>;
}