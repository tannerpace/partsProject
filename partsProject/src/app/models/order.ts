export class Order {
    public id?: string;
    public userId?: string;
    public totalPrice?: string;
    public datePlaced?: string;

    constructor(obj: any) {
        Object.assign(this, obj);
    }
}
