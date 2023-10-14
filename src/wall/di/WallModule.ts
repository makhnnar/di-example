import { myContatiner } from "../../di/AppModule"
import { IProfileRepository } from "../../profile/repository/ProfileRepository"
import { IWallPresenter, WallPresenter } from "../presentation/WallPresenter"
import { IWallRepository, WallRepository } from "../repository/WallRepository"

export class WallModule {

    providesWallRepository = () : IWallRepository  => {
        return myContatiner.resolve<WallRepository>("IWallRepository")
    }

    providesWallPresenter = () : IWallPresenter => {
        return myContatiner.resolve<WallPresenter>("IWallPresenter")
    }

}