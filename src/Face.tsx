import styled from "@emotion/styled";
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import MainPage from "./FaceComponent/MainPage";
import MaskAppBar from "./FaceComponent/MaskAppBar";

const Bg = styled.div`
  background-image: url(/doodle.jpg);
  background-size: contain;
  background-position: center center;
`;

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions["primary"];
  }
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#05348B",
    },
    secondary: {
      main: "#F9A647",
    },
    tertiary: {
      main: "#EDCFAB",
    },
  },
});

const font = createTheme({
  typography: {
    fontFamily: ["Lets Coffee", "Kiwi Maru", "Hachi Maru Pop"].join(","),
  },
  palette: {
    primary: {
      main: "#05348B",
    },
    secondary: {
      main: "#F9A647",
    },
    tertiary: {
      main: "#EDCFAB",
    },
  },
});

export type UrlData = {
  email: string | null;
  token: string | null;
};

const Face: React.FC = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  return (
    <>
      <ThemeProvider theme={theme}>
        <Bg>
          <MaskAppBar email={email} />
          <Box padding={7} />
          <Container>
            <ThemeProvider theme={font}>
              <MainPage email={email} token={token} />
            </ThemeProvider>
          </Container>
          <Box padding={7} />
        </Bg>
      </ThemeProvider>
    </>
  );
};

export default Face;
