import React, { useContext, createContext  } from 'react';
import { Post } from '../../post/ui/Post';
import { WallModule } from '../di/WallModule';

const dependencies = new WallModule()

const WallContext = createContext(dependencies)

export const WallScreen = () => {
    return <WallContext.Provider value={dependencies}>
      <Wall/>
    </WallContext.Provider>
} 

export const Wall = () => {
  const wallPresener = useContext(WallContext).getWallPresenter()
  return <div className="wall">
    { 
      wallPresener.getPost().map( 
        post => { return <Post postData={post}/> } 
      ) 
    }
  </div>
}