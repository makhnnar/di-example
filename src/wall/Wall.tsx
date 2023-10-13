import React from 'react';
import { Post } from '../post/ui/Post';
import { TextContentData } from '../post/data/ContentData';

const postData = {
    idPost: "idPost",
    publisher: {
        nickname: "nickname",
        photo: "../logo.svg"
    },
    content: new TextContentData("My long text content..."), 
    actions: {
        likes: "12",
        dislikes: "12",
        comments: "12",
    },
    createdAt: "createdAt"
}

export const Wall = () => {
  return (
    <div className="wall">
        <Post postData={postData}/>
    </div>
  );
}