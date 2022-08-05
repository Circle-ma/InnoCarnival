import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import WindPowerIcon from "@mui/icons-material/WindPower";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { createTheme, ThemeProvider } from "@mui/material";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#05348B",
//     },
//     secondary: {
//       main: "#F9A647",
//     },
//     tertiary: {
//       main: "#EDCFAB",
//     },
//   },
// });

// declare module "@mui/material/styles" {
//   interface Palette {
//     tertiary: Palette["primary"];
//   }

//   // allow configuration using `createTheme`
//   interface PaletteOptions {
//     tertiary: PaletteOptions["primary"];
//   }
// }

// // Update the Button's color prop options
// declare module "@mui/material/AppBar" {
//   interface AppBarPropsColorOverrides {
//     tertiary: true;
//   }
// }

export default function McAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  return (
    // <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <WindPowerIcon color="secondary" fontSize="large" />
          <Typography
            variant="h3"
            fontStyle="oblique"
            marginLeft={2}
            sx={{ flexGrow: 1 }}
          >
            Innocarnival
          </Typography>
          <IconButton color="inherit" sx={{ mr: 2 }} onClick={handleClick}>
            <MenuIcon fontSize="large" />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem
              onClick={() => {
                navigate("../bug");
              }}
            >
              香港農業常見的害蟲
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("../dna");
              }}
            >
              單細胞測序疾病診斷
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("../herbchain");
              }}
            >
              HerBChain草藥鏈
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("../parkinson");
              }}
            >
              帕金森病步態與可穿戴監測
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("../solidLight");
              }}
            >
              傳感應用的周期性納米結構
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
    // </ThemeProvider>
  );
}
