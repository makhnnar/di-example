export class TextContentData {
    content:string
    constructor(content:string){
        this.content = content
    }
}

export class PhotoContentData {
    photos:string[]
    constructor(photos:string[]){
        this.photos = photos
    }
}

export type ContentData = TextContentData | PhotoContentData