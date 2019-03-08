export const TYPES = {
    REQUEST: 'REQUEST',
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL'
};

class ActionTypes {
    constructor(baseType) {
        this[TYPES.REQUEST] = `${baseType}-${TYPES.REQUEST}`;
        this[TYPES.SUCCESS] = `${baseType}-${TYPES.SUCCESS}`;
        this[TYPES.FAIL] = `${baseType}-${TYPES.FAIL}`;
    }

    getValues() {
        return Object.values(this);
    }
}

export default base => new ActionTypes(base)
