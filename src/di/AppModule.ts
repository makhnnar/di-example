import { Lifecycle, container } from "tsyringe"
import { ProfileModule } from "../profile/di/ProfileModule"
import { WallModule } from "../wall/di/WallModule"
import { ProfileRepository } from "../profile/repository/ProfileRepository"
import { WallRepository } from "../wall/repository/WallRepository"
import { WallPresenter } from "../wall/presentation/WallPresenter"

export const myContatiner = container.createChildContainer()

myContatiner.register("IWallRepository",WallRepository,{lifecycle:Lifecycle.Singleton})
myContatiner.register("IProfileRepository",ProfileRepository,{lifecycle:Lifecycle.Singleton})
myContatiner.register("IWallPresenter",WallPresenter,{lifecycle:Lifecycle.Singleton})

export class AppModule {

    providesProfileModule = () : ProfileModule  => {
        return new ProfileModule()
    }

    providesWallModule = () : WallModule => {
        return new WallModule(
            this.providesProfileModule().getProfileRepository()
        )
    }

}