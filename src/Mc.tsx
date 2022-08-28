import styled from "@emotion/styled";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import McAppBar from "./McComponents/McAppBar";
import SubmitBtn from "./McComponents/SubmitBtn";
import Tiltle from "./McComponents/Tiltle";
import { BtnProvider } from "./UserAns";
import QuestionCardList from "./McComponents/QuestionCardList";
import { QuestionsProps } from "./Questions";
import { useSearchParams } from "react-router-dom";

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
  apps_id: string;
};

const Mc: React.FC<QuestionsListProps> = ({
  questionsList,
  projectName,
  linkList,
  apps_id,
}) => {
  let [searchParams] = useSearchParams();
  let email = searchParams.get("email");
  // const apps_id = searchParams.get("apps_id");
  const token = searchParams.get("token");

  return (
    <>
      <ThemeProvider theme={theme}>
        <Bg>
          <McAppBar linkList={linkList} email={email} />
          <Container>
            <Tiltle projectName={projectName} />
            <BtnProvider>
              <QuestionCardList questions={questionsList} />
              <SubmitBtn
                questions={questionsList}
                projectName={projectName}
                apps_id={apps_id}
                email={email}
                token={token}
              />
            </BtnProvider>
          </Container>
        </Bg>
      </ThemeProvider>
    </>
  );
};

export default Mc;
