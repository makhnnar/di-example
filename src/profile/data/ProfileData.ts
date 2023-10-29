export class ProfileData {

    idUser:string
    nickname:string
    bio:string
    photo:string

    constructor(
        idUser:string,
        nickname:string,
        bio:string,
        photo:string
    ){
        this.idUser = idUser
        this.nickname = nickname
        this.bio = bio
        this.photo = photo
    }

}