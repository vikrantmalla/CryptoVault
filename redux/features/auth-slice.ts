import { AuthState, InitialState } from '@/types/data'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: AuthState = {
  showModal: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
  }
})


export const {setShowModal} = auth.actions;
export default auth.reducer;
