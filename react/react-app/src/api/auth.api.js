import { callApi } from "./axios.client";

const authEndpoints = {
  login: "auth/login",
  verifyToken: "auth/verify-token",
};

const authApi = {
  login: async (params) => await callApi("post", authEndpoints.login, params),
  verifyToken: async () => await callApi("post", authEndpoints.verifyToken),
};

export default authApi;
