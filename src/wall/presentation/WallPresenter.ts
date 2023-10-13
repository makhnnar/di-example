import { PostData } from "../../post/data/PostData";
import { IWallRepository } from "../repository/WallRepository";

export interface IWallPresenter {

    getPost():PostData[]

}

export class WallPresenter implements IWallPresenter {

    wallRepository: IWallRepository

    constructor(wallRepository:IWallRepository){
        this.wallRepository = wallRepository
    }

    getPost(): PostData[] {
        return this.wallRepository.getPost()
    }

}