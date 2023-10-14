import React, { useContext, createContext  } from 'react';
import { Post } from '../../post/ui/Post';
import { WallModule } from '../di/WallModule';
import { IWallPresenter } from '../presentation/WallPresenter';
import { AppModule } from '../../di/AppModule';

const dependencies = new AppModule()

const wallDependencies = dependencies.providesWallModule()

const WallContext = createContext(wallDependencies)

export const WallScreen = () => {
    return <WallContext.Provider value={wallDependencies}>
      <Wall/>
    </WallContext.Provider>
} 

export const Wall = () => {
  const wallPresenter = useContext(WallContext).providesWallPresenter()
  return <div className="wall">
    { 
      wallPresenter.getPost().map( 
        post => { return <Post postData={post}/> } 
      ) 
    }
  </div>
}
