import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

import { BG_COLORS, COLORS } from "../components/common/Colors.jsx";
import Logo from "../components/common/Logo.jsx";
import StackRow from "../components/common/StackRow.jsx";

const AuthLayout = () => {
  return <Outlet />;
};

export default AuthLayout;