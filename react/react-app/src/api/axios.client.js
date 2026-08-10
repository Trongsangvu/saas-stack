import axios from "axios";
import queryString from "query-string";

import { API_URL } from "../configs/constants";

const getToken = () => localStorage.getItem("access_token");

const axiosClient = axios.create({
  baseURL: API_URL,
  paramsSerializer: queryString.stringify,
});

export const AuthorizeHeader = () => {
  return {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${getToken()}`,
  };
};

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const token = getToken();

    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    };
  },
  (error) => Promise.reject(error),
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    return response && response.data ? response.data : response;
  },
  (error) => {
    const err = error.response?.data || {
      message: "AN unknown error occurred",
    };
    return Promise.reject(err);
  },
);

// api caller
export const callApi = async (method, url, dataOrConfig) => {
  try {
    const response = await axiosClient({
      method,
      url,
      ...(method.toLowerCase() === "get"
        ? dataOrConfig
        : { data: dataOrConfig }),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const callApiResetPass = async ({ method, endpoint, data, token }) => {
  try {
    const response = await axios({
      method,
      url: `${API_URL}${endpoint}`,
      data,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
