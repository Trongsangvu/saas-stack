import { createBrowserRouter } from "react-router-dom";

import { APP_STATE, ROLES } from "../configs/constants.js";
import { ROUTES } from "../configs/routes";
import AuthLayout from "../layout/AuthLayout.jsx";
import HomeLayout from "../layout/HomeLayout.jsx";
import MainLayout from "../layout/MainLayout.jsx";
import NotFoundPage from './../Page/Bases/NotFoundPage';
import Page from './../components/common/Page';
import AppLayout from './../layout/AppLayout';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "*",
        element: <ProtectedRoute element={<NotFoundPage />} />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: ROUTES.LOGIN,
            element: <LoginPage />,
          },
        ],
      },
      // MAIN
      {
        element: <Page element={<MainLayout />} />,
        children: [
          {
            path: ROUTES.HOME,
            element: <Page
              state={APP_STATE.HOME}
              element={<HomePage />}
              roles={[ROLES.USER, ROLES.ADMIN, ROLES.MANAGER]}
            />
          },
          {
            element: (
              <Page
                element={<HomeLayout />}
              />
            ),
            children: []
          }
        ],
      },
    ],
  },
]);

export default router;