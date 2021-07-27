export class OrderItem {
    public id?: number;
    public partNumber?: string;
    public quantity?: number;
    public transactionId?: number;

    constructor(obj: any) {
        Object.assign(this, obj);
    }
}