import React, { useContext, createContext  } from 'react';
import { Post } from '../../post/ui/Post';
import { WallModule } from '../di/WallModule';
import { IWallPresenter } from '../presentation/WallPresenter';
import { IProfileRepository } from '../../profile/repository/ProfileRepository';

const WallContext = createContext(new WallModule())

interface WallScreenProps {
  profileRepository: IProfileRepository
}

export const WallScreen = ({profileRepository}:WallScreenProps) => {
    const dependencies = new WallModule(profileRepository)
    return <WallContext.Provider value={dependencies}>
      <Wall/>
    </WallContext.Provider>
} 

export const Wall = () => {
  const { allPosts } = useWallPresenter()
  return <div className="wall">
    { 
      allPosts.map( 
        post => { return <Post postData={post} key={post.idPost}/> } 
      ) 
    }
  </div>
}

export const useWallPresenter = (): IWallPresenter => {
    return useContext(WallContext).providesWallPresenter()
}
