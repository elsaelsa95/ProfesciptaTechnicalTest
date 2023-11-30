import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setToken } from "../utils/token";

export const login = createAsyncThunk(
  "login",
  async (
    { username, password, grant_type, client_id, client_secret },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "https://dev.profescipta.co.id/so-api/token",
        {
          username,
          password,
          grant_type,
          client_id,
          client_secret,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setToken(response.data.access_token);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: "",
    password: "",
  },
  reducers: {
    setLogin: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.grant_type = action.payload.grant_type;
      state.client_id = action.payload.client_id;
      client_secret = action.payload.client_secret;
    },
  },
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
