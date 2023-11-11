import { ActionsData } from "./ActionsData"
import { PublisherData } from "./PublisherData"

//in my bussiness the user has to provide the url for each multimedia
// content. We only provide access to the link

export class CommentData {

    idComment: string
    publisher : PublisherData
    content: string
    actions: ActionsData
    createdAt: string
    
    constructor(
        idComment: string,
        publisher : PublisherData,
        content: string,
        actions: ActionsData,
        createdAt: string
    ){
        this.idComment = idComment
        this.publisher = publisher
        this.content = content
        this.actions = actions
        this.createdAt = createdAt
    }

}