class ActionTypes {
    REQUEST;
    SUCCESS;
    FAIL;

    constructor(baseType) {
        this.REQUEST = `${baseType}-REQUEST`;
        this.SUCCESS = `${baseType}-SUCCESS`;
        this.FAIL    = `${baseType}-FAIL`;
    }

    getValues = () => Object.values(this);
}

export const createTypeRequest = (base) => new ActionTypes(base);
