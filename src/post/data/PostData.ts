import { ActionsData } from "./ActionsData"
import { ContentData } from "./ContentData"
import { PublisherData } from "./PublisherData"

export class PostData {

    idPost: string
    publisher : PublisherData
    content: ContentData
    actions: ActionsData
    createdAt: string
    
    constructor(
        idPost: string,
        publisher : PublisherData,
        content: ContentData,
        actions: ActionsData,
        createdAt: string
    ){
        this.idPost = idPost
        this.publisher = publisher
        this.content = content
        this.actions = actions
        this.createdAt = createdAt
    }

}