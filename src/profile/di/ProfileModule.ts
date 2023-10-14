import { IProfileRepository, ProfileRepository } from "../repository/ProfileRepository"

export class ProfileModule {

    getProfileRepository = () : IProfileRepository  => {
        return new ProfileRepository()
    }

}