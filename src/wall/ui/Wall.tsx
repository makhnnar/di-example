import React, { useContext, createContext  } from 'react';
import { Post } from '../../post/ui/Post';
import { IWallPresenter } from '../presentation/WallPresenter';
import { IWallModule, voidWallModule } from '../di/WallModule';

const WallContext = createContext(voidWallModule)

interface WallScreenProps {
  wallModule: IWallModule
}

export const WallScreen = ({wallModule}:WallScreenProps) => {
    const dependencies = wallModule
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
