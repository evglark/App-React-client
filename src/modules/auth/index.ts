import {authComponents} from './components'
import {authReducer} from './store'

const Components = authComponents;
const Store = authReducer;

export const authModule = {Components, Store};
