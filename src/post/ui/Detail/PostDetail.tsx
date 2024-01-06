import { useParams } from "react-router-dom";
import { runProfileDI } from "../../../profile/di/ProfileModule";
import { PostData } from "../../data/PostData";
import { Post } from "../Post";
import CommentList from "./Comments";
import { IProfilePresenter } from "../../../profile/presentation/ProfilePresenter";

const profileContainer = runProfileDI()

interface Props {
  postData: PostData
}

export const PostDetailScreen = () => {
  const { id } = useParams<string>()
  const { resolvePostDetail } = useProfilePresenter()
  return (
    <PostDetail postData={resolvePostDetail(id?id:"")}/>
  );
}

export const PostDetail = ({postData}:Props) => {
    return (
      <div className="post">
          <Post postData={postData}/>
          <CommentList comments={[]}/>
      </div>
    );
}

export const useProfilePresenter = (): IProfilePresenter => {
  console.log("profileContainer",JSON.stringify(profileContainer))
  const profilePresenter = profileContainer.resolve('profilePresenter');
  console.log("profilePresenter",JSON.stringify(profilePresenter))
  return profilePresenter
}