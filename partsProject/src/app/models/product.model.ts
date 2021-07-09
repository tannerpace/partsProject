export class Product {
    public partNumber?: string;
    public primaryVendor?: string;
    public color?: string;
    public partName?: string;
    public price?: string;

    constructor(obj: any) {
        Object.assign(this, obj);
    }
}