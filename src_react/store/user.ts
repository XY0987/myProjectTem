import { createSlice } from "@reduxjs/toolkit";

//
interface UserState {
  token: string;
  info: any;
}

const initialState: UserState = {
  token: "",
  info: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // 登录方法
    login: (state) => {
      initialState.token = state.token;
      initialState.info = state.info;
    },
    logout: () => {
      initialState.token = "";
      initialState.info = null;
    },
  },
});
// 导出登录和退出方法
export const { login, logout } = userSlice.actions;
// 默认导出reducer
export default userSlice.reducer;
