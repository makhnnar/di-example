import { PhotoContentData, TextContentData } from "../../post/data/ContentData";
import { PostData } from "../../post/data/PostData";

const postsData = [
    {
        idPost: "idPost1",
        publisher: {nickname: "Carlos Paco",photo: "../logo.svg"},
        content: new TextContentData("My long text content..."), 
        actions: {likes: "1",dislikes: "12",comments: "12",},
        createdAt: "createdAt"
    },
    {
        idPost: "idPost2",
        publisher: {nickname: "Supino Inclinado",photo: "../logo.svg"},
        content: new PhotoContentData(["myUrl"]), 
        actions: {likes: "10",dislikes: "78",comments: "56",},
        createdAt: "createdAt"
    },
    {
        idPost: "idPost3",
        publisher: {nickname: "Maromba maconheira",photo: "../logo.svg"},
        content: new TextContentData("Another text froma distant land where the sun never rises"), 
        actions: {likes: "2",dislikes: "8",comments: "12",},
        createdAt: "createdAt"
    },
    {
        idPost: "idPost4",
        publisher: {nickname: "De un lugar del cual nombre no recuerdo",photo: "../logo.svg"
        },
        content: new PhotoContentData(["myUrl"]), 
        actions: {likes: "3",dislikes: "0",comments: "8",},
        createdAt: "createdAt"
    },
    {
        idPost: "idPost5",
        publisher: {nickname: "Ailoviu",photo: "../logo.svg"},
        content: new TextContentData("One day an old man says to a younger one: There's no time on the world you will use to do that you need to do because when you need it, provably it is not necessary anymore"), 
        actions: {likes: "1",dislikes: "0",comments: "0",},
        createdAt: "createdAt"
    },
]

export interface IWallRepository {

    getPost():PostData[]

    modifyPostLikes(idPost:string,idUser:string):void

}

export class WallRepository implements IWallRepository {
    
    allPost?:PostData[]

    modifyPostLikes(idPost: string, idUser: string): void {
        if(!this.allPost){
            this.allPost = postsData
        }
        const postPosition = this.allPost.indexOf(
            this.allPost.find((post) => { return post.idPost===idPost })!
        )
        const valAsNumber = parseFloat(this.allPost[postPosition].actions.likes)
        const valPlus1 = valAsNumber+1
        this.allPost[postPosition].actions.likes = `${valPlus1}`
    }

    getPost(): PostData[] {
        if(!this.allPost){
            this.allPost = postsData
        }
        return this.allPost
    }
    
}