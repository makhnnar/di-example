import { IProfileRepository } from "../../profile/repository/ProfileRepository"
import { IWallPresenter, WallPresenter } from "../presentation/WallPresenter"
import { IWallRepository, WallRepository } from "../repository/WallRepository"

export class WallModule {

    profileRepository: IProfileRepository

    constructor(
        profileRepository: IProfileRepository
    ){
        this.profileRepository = profileRepository
    }

    providesWallRepository = () : IWallRepository  => {
        return new WallRepository()
    }

    providesWallPresenter = () : IWallPresenter => {
        return new WallPresenter(
            this.providesWallRepository(),
            this.profileRepository
        )
    }

}