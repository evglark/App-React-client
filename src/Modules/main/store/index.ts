import {createReducer} from 'Store/createReducer'

import {actionHandlers} from './handlers';
import {initState} from './state';

export const mainReducer = createReducer(initState, actionHandlers);
