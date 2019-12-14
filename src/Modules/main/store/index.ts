import {createReducer} from 'Store/createReducer'

import {initState} from './state';
import {actionHandlers} from './handlers';

export const mainReducer = createReducer(initState, actionHandlers);
