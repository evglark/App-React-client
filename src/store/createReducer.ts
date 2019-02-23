export const createReducer = (initialState = {}, actionHandlers = {}) => {
    return (state: any = initialState, action: any) => {
        const handler = actionHandlers[action.type]

        return handler ? handler(state, action) : state
    }
}
