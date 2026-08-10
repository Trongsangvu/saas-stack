export const API_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/v1/";

export const APP_STATE = {
  HOME: "HOME",
  ADMIN: "ADMIN",
  EXAMPLE: "EXAMPLE",
};

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  ALL: "all",
};
