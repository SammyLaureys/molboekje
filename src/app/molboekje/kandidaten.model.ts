export class Kandidaat {
    id: number;
    name: string;
    img: string;
    description: string;
    notes: string[];

    constructor() {
        this.id = 0;
        this.name = '';
        this.img = '';
        this.description = '';
        this.notes = []
    }
}