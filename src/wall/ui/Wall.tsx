import React from 'react';
import { Post } from '../../post/ui/Post';
import { IWallPresenter } from '../presentation/WallPresenter';
import { runWallDI, wallContainer } from '../di/WallModule';

runWallDI()

export const WallScreen = () => {
    return <Wall/>
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
    const wallPresenter = wallContainer.resolve('wallPresenter');
    console.log("wallPresenter",JSON.stringify(wallPresenter))
    return wallPresenter
}
