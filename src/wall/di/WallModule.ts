import { IProfileRepository } from "../../profile/repository/ProfileRepository"
import { IWallPresenter, useWallPresenter } from "../presentation/WallPresenter"
import { IWallRepository, WallRepository } from "../repository/WallRepository"

export interface IWallDataModule {

    providesWallRepository : () => IWallRepository
    
}

//interface to wrap the dependencies for the module
export interface WallDomainDependencies {

    providesWallRepository: () => IWallRepository,
    providesProfileRepository: () => IProfileRepository

}

export interface IWallModule {

    providesWallPresenter:  () => IWallPresenter 

}

export class WallDataModule implements IWallDataModule {

    providesWallRepository = () : IWallRepository  => {
        return new WallRepository()
    }

}

//this is needed to context creation
export const voidWallModule : IWallModule = {
    providesWallPresenter: function (): IWallPresenter {
        throw new Error("Function not implemented.")
    }
}

export class WallModule implements IWallModule {

    private wallDomainDependencies: WallDomainDependencies

    constructor(
        wallDomainDependencies: WallDomainDependencies
    ){
        this.wallDomainDependencies = wallDomainDependencies
    }

    providesWallPresenter = () : IWallPresenter => {
        return useWallPresenter(
            this.wallDomainDependencies.providesWallRepository(),
            this.wallDomainDependencies.providesProfileRepository()
        )
    }

}