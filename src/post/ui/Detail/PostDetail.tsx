import { PostData } from "../../data/PostData";
import { Post } from "../Post";
import CommentList from "./Comments";

interface Props {
    postData: PostData
}
  
export const PostDetail = ({postData}:Props) => {
    return (
      <div className="post">
          <Post postData={postData}/>
          <CommentList comments={[]}/>
      </div>
    );
  }