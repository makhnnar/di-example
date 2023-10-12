import React from 'react';

interface Props {
  publisherData:PublisherData
}

export const Publisher = ({ publisherData }: Props) => {
  return <div className="post-header">
      <img src={publisherData.photo} alt={`${publisherData.nickname}'s profile`} className="user-profile-image" />
      <span className="nickname">{publisherData.nickname}</span>
  </div>;
}