import React from "react";
import "./PostsGrid.css"; // Create this CSS file in the same directory
import { PostData } from "../../data/PostData";
import { Content } from "../Content/Content";

interface PostsGridProps {
    posts: PostData[]
}

const PostsGrid = ({ posts }:PostsGridProps) => {
  return (
    <div className="posts-grid">
      {posts.map((post, index) => (
        <div key={index} className="post-item">
            <Content contentData={post.content}/>
        </div>
      ))}
    </div>
  );
};

export default PostsGrid;
