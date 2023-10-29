import { IProfileDataModule, IProfileModule, ProfileDataModule, ProfileModule } from "../profile/di/ProfileModule"
import { IWallDataModule, IWallModule, WallDataModule, WallModule } from "../wall/di/WallModule"

export interface IAppModule {

    providesWallDomainModule : () => IWallModule
    providesProfileDomainModule : () => IProfileModule

}

//necessary empty module for context creation
export const voidAppModule : IAppModule = {
    providesWallDomainModule: function (): IWallModule {
        throw new Error("Function not implemented.")
    },
    providesProfileDomainModule: function (): IProfileModule {
        throw new Error("Function not implemented.")
    }
}

export class AppModule implements IAppModule {

    providesWallDataModule = () : IWallDataModule => {
        return new WallDataModule()
    }

    providesWallDomainModule = () : IWallModule => {
        return new WallModule({
            providesWallRepository: this.providesWallDataModule().providesWallRepository,
            providesProfileRepository: this.providesProfileDataModule().providesProfileRepository
        })
    }

    providesProfileDataModule = () : IProfileDataModule => {
        return new ProfileDataModule()
    }

    providesProfileDomainModule = () : IProfileModule => {
        return new ProfileModule({
            providesWallRepository: this.providesWallDataModule().providesWallRepository,
            providesProfileRepository: this.providesProfileDataModule().providesProfileRepository
        })
    }
    
}