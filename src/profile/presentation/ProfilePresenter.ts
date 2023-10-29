import { useEffect, useState } from "react"
import { PostData } from "../../post/data/PostData"
import { IWallRepository } from "../../wall/repository/WallRepository"
import { IProfileRepository } from "../repository/ProfileRepository"
import { ProfileData } from "../data/ProfileData"

export interface IProfilePresenter {

    allPosts:PostData[]

    userProfile: ProfileData

}

export const useProfilePresenter = (
    wallRepository:IWallRepository,
    profileRepository: IProfileRepository
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
    }, [profile])

    return {
        allPosts: posts,
        userProfile: profile
    }

}
