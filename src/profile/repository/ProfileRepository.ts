import { ProfileData } from "../data/ProfileData"

const idProfile = "idProfile" 

export interface IProfileRepository {

    getProfile():ProfileData

    getProfileId():string

}

export class ProfileRepository implements IProfileRepository {

    getProfile(): ProfileData {
        return new ProfileData(
            idProfile,
           "someName",
           "someBio",
           "/img/image6.jpeg" 
        )
    }
    
    getProfileId(): string {
        return idProfile
    }
    
}