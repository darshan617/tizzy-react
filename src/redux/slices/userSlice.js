import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Darshan",
  designation: "React Js Developer",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, { payload }) => {
      state.name = payload;
    },
    setDesignation: (state, { payload }) => {
      state.designation = payload;
    },
  },
});

export const { setName, setDesignation } = userSlice.actions;

export const selectName = (state) => state.user.name;

export default userSlice.reducer;
