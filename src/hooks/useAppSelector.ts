// Util and Lib Imports
import {RootState} from '../libs/reduxToolkit/models'

// Package Imports
import {useSelector, TypedUseSelectorHook} from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
