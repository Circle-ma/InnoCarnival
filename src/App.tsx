import styled from "@emotion/styled";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import McAppBar from "./components/McAppBar";
import SubmitBtn from "./components/SubmitBtn";
import Tiltle from "./components/Tiltle";
import { BtnProvider } from "./UserAns";
import QuestionCardList from "./components/QuestionCardList";
import { QuestionsProps } from "./Questions";

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

type QuestionsListProps = {
  questionsList: QuestionsProps[];
  projectName: string;
  linkList: { navigate: string; projectName: string }[];
};

const App: React.FC<QuestionsListProps> = ({
  questionsList,
  projectName,
  linkList,
}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Bg>
          <McAppBar linkList={linkList} />
          <Container>
            <Tiltle projectName={projectName} />
            <BtnProvider>
              <QuestionCardList questions={questionsList} />
              <SubmitBtn questions={questionsList} projectName={projectName} />
            </BtnProvider>
          </Container>
        </Bg>
      </ThemeProvider>
    </>
  );
};

export default App;
