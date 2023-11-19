import { useState, useEffect } from "react"
import { IProfileRepository } from "../../profile/repository/ProfileRepository"
import { IWallRepository } from "../../wall/repository/WallRepository"
import { PostData } from "../data/PostData"

export interface IPostPresenter {

    allPosts:PostData[]

    modifyPostLikes(idPost:string):void

}

interface PostPresenterParams {
    wallRepository:IWallRepository
    profileRepository: IProfileRepository
}

export const usePostPresenter = (
    {wallRepository,profileRepository} : PostPresenterParams
) : IPostPresenter => {

    const [posts,setPosts] = useState<PostData[]>([])

    useEffect(() => {
        if (posts.length===0) {
            const newPost = wallRepository.getPost()
            setPosts([...newPost])
        }
    }, [posts])

    const modifyPostLikes = (idPost:string) => {
        wallRepository.modifyPostLikes(idPost,profileRepository.getProfileId())
        const newPost = wallRepository.getPost()
        setPosts([...newPost])
    }

    const toReturn : IPostPresenter = {
        allPosts: posts ,
        modifyPostLikes : modifyPostLikes
    }
    return toReturn

}