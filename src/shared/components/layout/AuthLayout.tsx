import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";

function AuthLayout() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography variant="h5" mb={2}>
        Auth
      </Typography>
      <Outlet />
    </Box>
  );
}

export default AuthLayout;
