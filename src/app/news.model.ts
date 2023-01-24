export class News {
    title: string;
    img: string;
    summary: string;
    releaseDate: Date;

    constructor() {
        this.title = '';
        this.img = '';
        this.summary = '';
        this.releaseDate = new Date();
    }
}