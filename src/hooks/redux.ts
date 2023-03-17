import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux'
import {AppDispatch, RootType} from "../store";

export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector
export const useAppDispatch = useDispatch<AppDispatch>