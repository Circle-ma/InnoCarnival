import { Typography } from "@mui/material";

type QuestionProps = {
  topic: string;
  description: string;
};

const Question: React.FC<QuestionProps> = ({ topic, description }) => {
  return (
    <>
      <Typography variant="h5">{topic}</Typography>
      <Typography marginY={2}>{description}</Typography>
    </>
  );
};

export default Question;
