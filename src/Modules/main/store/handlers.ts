import {MAIN_SOME} from './actions';
import {IInitState} from './state';

export const actionHandlers = {
    [MAIN_SOME.REQUEST]: (state: IInitState): IInitState => ({...state}),
    [MAIN_SOME.FAIL]: (state: IInitState, { payload }): IInitState => ({...state}),
    [MAIN_SOME.SUCCESS]: (state: IInitState, { payload }): IInitState => ({...state}),
};
