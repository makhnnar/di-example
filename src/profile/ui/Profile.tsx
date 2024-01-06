import React from "react";
import PostsGrid from "../../post/ui/PostsGrid/PostsGrid";
import ProfileHeader from "./profileHeader/ProfileHeader";
import { IProfilePresenter } from "../presentation/ProfilePresenter";

import "./Profile.css";
import { runProfileDI } from "../di/ProfileModule";


const profileContainer = runProfileDI()

export const ProfileScreen = () => {
    return <Profile/>
} 

const Profile = () => {
  const { allPosts,userProfile } = useProfilePresenter()
  return (
    <div className="profile">
      <ProfileHeader profile={userProfile}/>
      <div className="profile-posts">
        <PostsGrid posts={allPosts}/>
      </div>
    </div>
  );
};

export default Profile;

export const useProfilePresenter = (): IProfilePresenter => {
    const profilePresenter = profileContainer.resolve('profilePresenter');
    console.log("profilePresenter",JSON.stringify(profilePresenter))
    return profilePresenter
}
