class ActionTypes {
    REQUEST: string;
    SUCCESS: string;
    FAIL: string;

    constructor(baseType: string) {
        this.REQUEST = `${baseType}-REQUEST`;
        this.SUCCESS = `${baseType}-SUCCESS`;
        this.FAIL    = `${baseType}-FAIL`;
    }

    getValues(): string[] {
        return Object.values(this);
    }
}

export const createTypeRequest = (base) => new ActionTypes(base);
