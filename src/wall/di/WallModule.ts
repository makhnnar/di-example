import { IProfileRepository } from "../../profile/repository/ProfileRepository"
import { IWallPresenter, wallPresenter } from "../presentation/WallPresenter"
import { IWallRepository, WallRepository } from "../repository/WallRepository"
import { IWallState, useWallState } from "../state/WallState"

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

    private providesWallState = () :IWallState => {
        return useWallState(this.providesWallRepository())
    }

    providesWallPresenter = () : IWallPresenter => {
        return wallPresenter(
            this.providesWallState(),
            this.profileRepository!
        )
    }

}