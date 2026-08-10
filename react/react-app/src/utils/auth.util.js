import authApi from "../api/auth.api";
import { setUser } from "../redux/features/user.slice";

export const authUtils = {
  isAuthenticated: async (dispatch) => {
    const token = localStorage.getItem("access_token");
    if (!token) return false;
    try {
      const response = await authApi.verifyToken();
      if (response && dispatch) {
        dispatch(setUser({ user: response.data }));
      }
      return response.data || false;
    } catch {
      return false;
    }
  },
};

export const roleUtils = {
  isAvailable: (roles, userRole) => {
    if (roles === "all") return true;
    if (typeof roles === "string") return roles === userRole;
    if (Array.isArray(roles)) return roles.includes(userRole);

    return false;
  },
  isAdmin: (userRole) => userRole === "admin",
  isUser: (userRole) => userRole === "user",
};
