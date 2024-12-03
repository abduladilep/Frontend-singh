import { Dashboard } from "@mui/icons-material";

export const rootPaths = {
  homeRoot: '/',
  authRoot: 'authentication',
  errorRoot: 'error',
};

export default {
  home: `/${rootPaths.homeRoot}`,
  login: `/${rootPaths.authRoot}/login`,
  signup: `/${rootPaths.authRoot}/sign-up`,
  Dashboard: `/${rootPaths.authRoot}/dashboard`,
  Users: `/${rootPaths.authRoot}/user`,
  Games: `/${rootPaths.authRoot}/games`,
  Report: `/${rootPaths.authRoot}/reports`,
  settings: `/${rootPaths.authRoot}/settings`,
  404: `/${rootPaths.errorRoot}/404`,
};


