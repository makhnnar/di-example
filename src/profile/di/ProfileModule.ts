import { IProfileRepository } from "../repository/ProfileRepository"

export class ProfileModule {

    profileRepository: IProfileRepository

    constructor(
        profileRepository: IProfileRepository
    ){
        this.profileRepository = profileRepository
    }

    getProfileRepository = () : IProfileRepository  => {
        return this.profileRepository
    }

}