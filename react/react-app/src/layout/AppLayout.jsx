import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { matchPath, Outlet, useNavigate } from 'react-router-dom';

import { API_URL } from '../configs/constants.js';
import { ROUTES } from '../configs/routes';
import { authUtils } from '../utils/auth.util';

const AppLayout = () => {
  return <Outlet />;
};

export default AppLayout;
