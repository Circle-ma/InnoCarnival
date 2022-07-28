import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";

const Bg = styled.div`
  background-image: url(/bluetri.png);
  background-size: cover;
  background-position: center center;
`;

const Tiltle: React.FC<{ projectName: string }> = ({ projectName }) => {
  return (
    <>
      <Paper
        elevation={12}
        sx={{
          margin: 3,
        }}
      >
        <Bg>
          <Typography
            variant="h2"
            align="center"
            padding={5}
            color="white"
            fontWeight="bold"
          >
            {projectName}
          </Typography>{" "}
        </Bg>
      </Paper>
    </>
  );
};

export default Tiltle;
