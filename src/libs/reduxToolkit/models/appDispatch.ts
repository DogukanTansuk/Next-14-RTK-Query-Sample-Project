// Util and Lib Imports

import {store} from '@/libs/reduxToolkit'

export type AppDispatch = typeof store.dispatch
export const appDispatch = store.dispatch
