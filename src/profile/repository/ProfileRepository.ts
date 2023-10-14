import {injectable} from "tsyringe";

export interface IProfileRepository {

    getProfile():void

    getProfileId():string

}

@injectable()
export class ProfileRepository implements IProfileRepository {

    getProfile(): void {
        throw new Error("Method not implemented.")
    }
    
    getProfileId(): string {
        throw new Error("Method not implemented.")
    }
    
}