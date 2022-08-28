import { Paper, Box } from "@mui/material";
import Question from "./Question";
import RadioButton from "./RadioButton";

type CardProps = {
  questionNumber: number;
  topic: string;
  description: string;
  option: [string, string, string, string];
};

const QuestionCard: React.FC<CardProps> = ({
  questionNumber,
  topic,
  description,
  option,
}) => {
  return (
    <>
      <Paper elevation={14} sx={{ margin: 3, borderRadius: 4 }}>
        <Box padding={2}>
          <Question topic={topic} description={description} />
          <RadioButton questionNumber={questionNumber} option={option} />
        </Box>
      </Paper>
    </>
  );
};

export default QuestionCard;
