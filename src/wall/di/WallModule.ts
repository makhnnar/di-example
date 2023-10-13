import { IWallPresenter, WallPresenter } from "../presentation/WallPresenter"
import { IWallRepository, WallRepository } from "../repository/WallRepository"

export class WallModule {

    getWallRepository = () : IWallRepository  => {
        return new WallRepository()
    }

    getWallPresenter = () : IWallPresenter => {
        return new WallPresenter(this.getWallRepository())
    }

}