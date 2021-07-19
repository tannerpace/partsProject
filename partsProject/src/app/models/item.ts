export class Item {
    public id?: number;
    public userId?: number;
    public partNumber?: string;
    public quantity?: number;

    constructor(obj: any) {
        Object.assign(this, obj);
    }
}



