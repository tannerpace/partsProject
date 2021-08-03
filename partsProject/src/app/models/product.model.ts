export class Product {
    public partNumber?: string;
    public PrimaryVendor?: string;
    public color?: string;
    public partName?: string;
    public price?: string;
    public Category?: any;
    public img?: string;


    constructor(obj: any) {
        Object.assign(this, obj);
    }
}