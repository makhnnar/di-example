import { PostData } from "../../post/data/PostData";
import { IProfileRepository } from "../../profile/repository/ProfileRepository";
import { IWallState } from "../state/WallState";

export interface IWallPresenter {

    allPosts:PostData[]

    modifyPostLikes(idPost:string):void

}

export const wallPresenter = (
    wallRepository:IWallState,
    profileRepository: IProfileRepository
) : IWallPresenter => {

    const modifyPostLikes = (idPost: string) => {
        console.log("clicking: presenter")
        wallRepository.modifyPostLikes(
            idPost,
            profileRepository.getProfileId()
        )
    }

    const toReturn : IWallPresenter = {
        allPosts: wallRepository.allPosts,
        modifyPostLikes:modifyPostLikes
    }
    return toReturn

}