import * as SecureStore from "expo-secure-store";

export const setToken = (token) => {
  return SecureStore.setItemAsync("access_token", token);
};

export const getToken = () => {
  return SecureStore.getItemAsync("access_token");
};

export const clearToken = () => {
  return SecureStore.deleteItemAsync("access_token");
};
