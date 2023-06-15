import { AuthState, InitialState } from '@/types/data'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    value: {
        showModal: false
    } as AuthState
} as InitialState

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {}
})