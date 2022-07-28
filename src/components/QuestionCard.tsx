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
      <Paper elevation={12} sx={{ margin: 3 }}>
        <Box padding={3}>
          <Question topic={topic} description={description} />
          <RadioButton questionNumber={questionNumber} option={option} />
          {/* <Divider sx={{ marginTop: 3 }} /> */}
        </Box>
      </Paper>
    </>
  );
};

export default QuestionCard;
