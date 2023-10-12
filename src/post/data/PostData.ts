
class PostData {

    publisher : PublisherData
    content: ContentData
    actions: ActionsData
    
    constructor(
        publisher : PublisherData,
        content: ContentData,
        actions: ActionsData
    ){
        this.publisher = publisher
        this.content = content
        this.actions = actions
    }

}