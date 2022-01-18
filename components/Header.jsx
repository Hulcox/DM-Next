import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import "@fontsource/roboto/700.css";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const HeaderBar = () => {
  const theme = createTheme({
    palette: {
      primary: { main: "#581845" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Link href="/" passHref>
              <Button color="inherit">Journal</Button>
            </Link>
            <Link href="/add-entry" passHref>
              <Button color="inherit">Add Entries</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default HeaderBar;
