import styled from "@emotion/styled";
import { Typography } from "@mui/material";

type QuestionProps = {
  topic: string;
  description: string;
};

const Ndiv = styled.div`
  white-space: pre-line;
`;

const Question: React.FC<QuestionProps> = ({ topic, description }) => {
  return (
    <>
      <Typography variant="h5">{topic}</Typography>
      <Typography component={"span"} marginY={2}>
        <Ndiv>{description}</Ndiv>
      </Typography>
    </>
  );
};

export default Question;
