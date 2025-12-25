import { Outlet } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function MainLayout() {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">
            Bibliocast
          </Typography>
        </Toolbar>
      </AppBar>

      {/* AppBar height spacer */}
      <Toolbar />

      <Box component="main" sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
