class TextContent {

    content:string

    constructor(content:string){
        this.content = content
    }

}

class PhotoContent {

    photos:string[]

    constructor(photos:string[]){
        this.photos = photos
    }

}

type ContentData = TextContent | PhotoContent