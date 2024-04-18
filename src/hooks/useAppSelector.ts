// Util and Lib Imports

// Pacakge Imports
import {useSelector, TypedUseSelectorHook} from 'react-redux'
import {RootState} from '../libs/reduxToolkit/models'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
