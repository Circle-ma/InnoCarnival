import styled from "@emotion/styled";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import McAppBar from "./components/McAppBar";
import SubmitBtn from "./components/SubmitBtn";
import Tiltle from "./components/Tiltle";
import { BtnProvider } from "./context";
import QuestionCardList from "./components/QuestionCardList";

const Bg = styled.div`
  background-image: url(/doodle.jpg);
  background-size: contain;
  background-position: center center;
`;

export type CardProps = {
  questionNumber: number;
  topic: string;
  description: string;
  option: [string, string, string, string];
  Answer: string;
};

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

const App: React.FC = () => {
  const questions: CardProps[] = [
    {
      questionNumber: 1,
      topic: "1. What is Your Name?",
      description:
        "Finding the red rose in the mailbox was a pleasant surprise for Sarah. She didn't have a boyfriend or know of anyone who was interested in her as anything more than a friend. There wasn't even a note attached to it. Although it was a complete mystery, it still made her heart jump and race a little more than usual. She wished that she could simply accept the gesture and be content knowing someone had given it to her, but that wasn't the way Sarah did things. Now it was time to do a little detective work and try to figure who had actually left the red rose.",
      option: ["A", "B", "C", "D"],
      Answer: "A",
    },
    {
      questionNumber: 2,
      topic: "2. How old are you?",
      description:
        "There was no ring on his finger. That was a good sign although far from proof that he was available. Still, it was much better than if he had been wearing a wedding ring on his hand. She glanced at his hand a bit more intently to see if there were any tan lines where a ring may have been, and he's simply taken it off. She couldn't detect any which was also a good sign and a relief. The next step would be to get access to his wallet to see if there were any family photos in it.",
      option: ["A", "B", "C", "D"],
      Answer: "B",
    },
    {
      questionNumber: 3,
      topic: "3. Where are you from?",
      description:
        "She glanced up into the sky to watch the clouds taking shape. First, she saw a dog. Next, it was an elephant. Finally, she saw a giant umbrella and at that moment the rain began to pour.",
      option: ["A", "B", "C", "D"],
      Answer: "C",
    },
    {
      questionNumber: 4,
      topic: "4. Why you are here?",
      description:
        "Sometimes it's just better not to be seen. That's how Harry had always lived his life. He prided himself as being the fly on the wall and the fae that blended into the crowd. That's why he was so shocked that she noticed him.",
      option: ["A", "B", "C", "D"],
      Answer: "D",
    },
    {
      questionNumber: 5,
      topic: "5.What do you want to be?",
      description:
        "She reached her goal, exhausted. Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work?",
      option: ["A", "B", "C", "D"],
      Answer: "B",
    },
    {
      questionNumber: 6,
      topic: "6.What do you want to be?",
      description:
        "She reached her goal, exhausted. Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work?",
      option: ["A", "B", "C", "D"],
      Answer: "B",
    },
    {
      questionNumber: 7,
      topic: "7.What do you want to be?",
      description:
        "She reached her goal, exhausted. Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work?",
      option: ["A", "B", "C", "D"],
      Answer: "B",
    },
    {
      questionNumber: 8,
      topic: "8.What do you want to be?",
      description:
        "She reached her goal, exhausted. Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work?",
      option: ["A", "B", "C", "D"],
      Answer: "B",
    },
    {
      questionNumber: 9,
      topic: "9.What do you want to be?",
      description:
        "She reached her goal, exhausted. Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work?",
      option: ["A", "B", "C", "D"],
      Answer: "B",
    },
    {
      questionNumber: 10,
      topic: "10.What do you want to be?",
      description:
        "She reached her goal, exhausted. Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work?",
      option: ["A", "B", "C", "D"],
      Answer: "B",
    },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <McAppBar />
        <Bg>
          <Container>
            <Tiltle projectName="Project Name" />
            <BtnProvider>
              <QuestionCardList questions={questions} />
              <SubmitBtn questions={questions} />
            </BtnProvider>
          </Container>
        </Bg>
      </ThemeProvider>
    </>
  );
};

export default App;
