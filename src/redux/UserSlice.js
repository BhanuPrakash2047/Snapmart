import { createSlice } from '@reduxjs/toolkit';

const initialstate = {
  userName: "",
  email: "",
  phone: "",
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialstate,
  reducers: {
    setUser: (state, action) => {
      if (!state.userName) {
        state.userName = action.payload.userName;
        state.email = action.payload.email;
        state.phone = action.payload.phone;
      }
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const { setUser, updateUserName, updateEmail, updatePhone } = userSlice.actions;
export default userSlice.reducer;
