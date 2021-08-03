export class User {
    public id?: number;

    public firstName?: string;
    public lastName?: string;

    public password?: string;
    public email?: string;
    public admin?: Boolean;

    constructor(obj: any) {
        Object.assign(this, obj);
    }
};