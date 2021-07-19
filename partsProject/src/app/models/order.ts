export class Order {
    public id?: number;
    public userId?: string;
    public totalPrice?: string;
    public datePlaced?: string;

    constructor(obj: any) {
        Object.assign(this, obj);
    }
}