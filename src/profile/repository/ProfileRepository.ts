const idProfile = "idProfile" 

export interface IProfileRepository {

    getProfile():void

    getProfileId():string

}

export class ProfileRepository implements IProfileRepository {

    getProfile(): void {
        throw new Error("Method not implemented.")
    }
    
    getProfileId(): string {
        return idProfile
    }
    
}