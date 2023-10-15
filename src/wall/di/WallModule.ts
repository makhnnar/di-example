import { IProfileRepository } from "../../profile/repository/ProfileRepository"
import { IWallPresenter, useWallPresenter } from "../presentation/WallPresenter"
import { IWallRepository, WallRepository } from "../repository/WallRepository"

export class WallModule {

    private profileRepository?: IProfileRepository

    constructor(
        profileRepository?: IProfileRepository
    ){
        this.profileRepository = profileRepository
    }

    private providesWallRepository = () : IWallRepository  => {
        return new WallRepository()
    }

    providesWallPresenter = () : IWallPresenter => {
        return useWallPresenter(
            this.providesWallRepository(),
            this.profileRepository!
        )
    }

}