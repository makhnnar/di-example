import { useState, useEffect } from "react";
import { PostData } from "../../post/data/PostData";
import { IProfileRepository } from "../../profile/repository/ProfileRepository";
import { IWallRepository } from "../repository/WallRepository";

export interface IWallPresenter {

    allPosts:PostData[]

    modifyPostLikes(idPost:string):void

}

export const useWallPresenter = (
    wallRepository:IWallRepository,
    profileRepository: IProfileRepository
) : IWallPresenter => {

    const [posts,setPosts] = useState<PostData[]>([])

    useEffect(() => {
        if (posts.length===0) {
          setPosts(wallRepository.getPost())
        }
    }, [posts])

    const modifyPostLikes = (idPost:string) => {
        wallRepository.modifyPostLikes(idPost,profileRepository.getProfileId())
        setPosts(wallRepository.getPost())
    }

    const toReturn : IWallPresenter = {
        allPosts: posts ,
        modifyPostLikes : modifyPostLikes
    }
    return toReturn

}