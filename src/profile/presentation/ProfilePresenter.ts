import { useEffect, useState } from "react"
import { PostData } from "../../post/data/PostData"
import { IWallRepository } from "../../wall/repository/WallRepository"
import { IProfileRepository } from "../repository/ProfileRepository"
import { ProfileData } from "../data/ProfileData"

export interface IProfilePresenter {

    allPosts:PostData[]

    userProfile: ProfileData

    resolvePostDetail: (id:string) => PostData

}

interface ProfilePresenterParams {
    wallRepository:IWallRepository
    profileRepository: IProfileRepository
}

export const useProfilePresenter = (
    {wallRepository,profileRepository}:ProfilePresenterParams
) : IProfilePresenter => {

    const [posts,setPosts] = useState<PostData[]>([])

    const [profile,setProfile] = useState<ProfileData>(new ProfileData("","","",""))

    useEffect(() => {
        if (posts.length===0) {
            const newPost = wallRepository.getPost()
            setPosts([...newPost])
        }
    }, [posts])

    useEffect(() => {
        const profile = profileRepository.getProfile()
        setProfile({...profile})
    }, [])

    const resolvePostDetail = (id:string) : PostData => {
        console.log("id post",id)
        console.log("allPost => reolver",posts)
        return posts.filter(post => post.idPost == id)[0]
    }

    return {
        allPosts: posts,
        userProfile: profile,
        resolvePostDetail:resolvePostDetail
    }

}
