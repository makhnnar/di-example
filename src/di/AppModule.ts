import { IProfileRepository, ProfileRepository } from "../profile/repository/ProfileRepository"

export class AppModule {

    private _profileRepository?: IProfileRepository

    providesProfileRepository = () : IProfileRepository  => {
        if(!this._profileRepository){
            this._profileRepository = new ProfileRepository()
        }
        return this._profileRepository
    }

}