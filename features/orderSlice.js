import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../utils/token";
import { useState } from "react";

export const getOrderList = createAsyncThunk(
  "order/orderList",
  async ({ rejectWithValue }) => {
    try {
      const [accessToken, setAccessToken] = useState("");
      getToken().then((token) => setAccessToken(token));

      const response = await axios.get(
        "https://dev.profescipta.co.id/so-api/Order/GetItems",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
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

const orderEntity = createEntityAdapter({
  selectId: (order) => order.id,
});

const orderSlice = createSlice({
  name: "order",
  initialState: orderEntity.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getOrderList.fulfilled, (state, action) => {
      state.entities.push(action.payload);
    });
  },
});

export const orderSelector = orderEntity.getSelectors((state) => state.order);
export default orderSlice.reducer;
