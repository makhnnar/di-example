import { useEffect, useState } from "react"
import { PostData } from "../../post/data/PostData"
import { IWallRepository } from "../repository/WallRepository"

export interface IWallState {

    allPosts: PostData[]

    modifyPostLikes(idPost:string,idUser:string):void

}

export const useWallState = (
    wallRepository:IWallRepository
) : IWallState => {

    const [posts,setPosts] = useState<PostData[]>([])

    useEffect(() => {
        if (posts.length===0) {
          setPosts(wallRepository.getPost())
        }
    }, [posts])

    const modifyPostLikes = (idPost:string, idUser:string) => {
        wallRepository.modifyPostLikes(idPost,idUser)
        setPosts(wallRepository.getPost())
        console.log("updated post: ",posts)
    }

    const toReturn : IWallState = {
        allPosts: posts ,
        modifyPostLikes : modifyPostLikes
    }
    return toReturn
}