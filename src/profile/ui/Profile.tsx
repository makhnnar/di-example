import React, { createContext, useContext } from "react";
import PostsGrid from "../../post/ui/PostsGrid/PostsGrid";
import ProfileHeader from "./profileHeader/ProfileHeader";
import { IProfileModule, voidProfileModule } from "../di/ProfileModule";
import { IProfilePresenter } from "../presentation/ProfilePresenter";

const ProfileContext = createContext(voidProfileModule)

interface ProfileScreenProps {
    profileModule: IProfileModule
  }

export const ProfileScreen = ({profileModule}:ProfileScreenProps) => {
    const dependencies = profileModule
    return <ProfileContext.Provider value={dependencies}>
      <Profile/>
    </ProfileContext.Provider>
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
    return useContext(ProfileContext).providesProfilePresenter()
}
