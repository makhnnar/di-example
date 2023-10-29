import { IWallRepository } from "../../wall/repository/WallRepository"
import { IProfilePresenter, useProfilePresenter } from "../presentation/ProfilePresenter"
import { IProfileRepository, ProfileRepository } from "../repository/ProfileRepository"

export interface IProfileDataModule {

    providesProfileRepository : () => IProfileRepository

}

export interface ProfileDomainDependencies {

    providesWallRepository: () => IWallRepository,
    providesProfileRepository: () => IProfileRepository

}

export interface IProfileModule {

    providesProfileRepository : () => IProfileRepository
    providesProfilePresenter : () => IProfilePresenter

}

export const voidProfileModule : IProfileModule = {
    providesProfileRepository: function (): IProfileRepository {
        throw new Error("Function not implemented.")
    },
    providesProfilePresenter: function (): IProfilePresenter {
        throw new Error("Function not implemented.")
    }
}

export class ProfileDataModule implements IProfileDataModule {

    private _profileRepository?: IProfileRepository

    //testing singleton creation
    providesProfileRepository = () : IProfileRepository  => {
        if(!this._profileRepository){
            this._profileRepository = new ProfileRepository()
        }
        return this._profileRepository
    }

}

export class ProfileModule implements IProfileModule{

    profileDomainDependencies: ProfileDomainDependencies

    constructor(
        profileDomainDependencies: ProfileDomainDependencies
    ){
        this.profileDomainDependencies = profileDomainDependencies
    }

    providesProfileRepository = () : IProfileRepository  => {
        return this.profileDomainDependencies.providesProfileRepository()
    }

    providesProfilePresenter = () : IProfilePresenter => {
        return useProfilePresenter(
            this.profileDomainDependencies.providesWallRepository(),
            this.profileDomainDependencies.providesProfileRepository(),
        )
    }

}