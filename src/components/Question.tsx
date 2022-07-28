import { Typography } from "@mui/material";

type QuestionProps = {
  topic: string;
  description: string;
};

const Question: React.FC<QuestionProps> = ({ topic, description }) => {
  return (
    <>
      <Typography variant="h4" marginTop={3}>
        {topic}
      </Typography>
      <Typography marginY={3}>{description}</Typography>
    </>
  );
};

export default Question;
