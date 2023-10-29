import React from "react";
import { ProfileData } from "../../data/ProfileData";

interface ProfileHeaderProps {
    profile:ProfileData
} 

const ProfileHeader = ({profile}:ProfileHeaderProps) => {
  return (
    <div className="profile-header">
        <img
          src={profile.photo}
          alt="Profile Picture"
          className="profile-picture"
        />
        <div className="profile-info">
          <h1>{profile.nickname}</h1>
          <p>{profile.bio}</p>
        </div>
    </div>
  );
};

export default ProfileHeader;
