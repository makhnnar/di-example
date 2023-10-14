import { ProfileModule } from "../profile/di/ProfileModule"
import { WallModule } from "../wall/di/WallModule"

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