import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: null,
        email: null,
        password: null,
        loggedIn: false,
      },
      reducers: {
        login: (state, action) => {
          state.name = action.payload.name;
          state.email = action.payload.email;
          state.password = action.payload.password;
          state.loggedIn = action.payload.loggedIn;
        },
        logout: (state, action) => {
          state.name = null;
          state.email = null;
          state.password = null;
          state.loggedIn = false;
        },

    }
});
export const {login, logout} = userSlice.actions;
export const selectUser = state => state.user;
export default userSlice.reducer;
