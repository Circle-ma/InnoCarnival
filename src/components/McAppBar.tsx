import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import WindPowerIcon from "@mui/icons-material/WindPower";
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
  return (
    // <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <WindPowerIcon color="secondary" fontSize="large" />
          <Typography variant="h3" fontStyle="oblique" marginLeft={2}>
            Innocarnival
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    // </ThemeProvider>
  );
}
