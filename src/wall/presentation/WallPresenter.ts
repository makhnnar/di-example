import { PostData } from "../../post/data/PostData";
import { IProfileRepository } from "../../profile/repository/ProfileRepository";
import { IWallRepository } from "../repository/WallRepository";

export interface IWallPresenter {

    getPost():PostData[]

    modifyPostLikes(idPost:string):void

}

export class WallPresenter implements IWallPresenter {

    wallRepository: IWallRepository
    profileRepository: IProfileRepository

    constructor(
        wallRepository:IWallRepository,
        profileRepository: IProfileRepository
    ){
        this.wallRepository = wallRepository
        this.profileRepository = profileRepository
    }

    modifyPostLikes(idPost: string): void {
        throw new Error("Method not implemented.");
    }

    getPost(): PostData[] {
        return this.wallRepository.getPost()
    }

}