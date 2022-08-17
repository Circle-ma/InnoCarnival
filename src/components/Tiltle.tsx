import { Paper, Typography } from "@mui/material";

const Tiltle: React.FC<{ projectName: string }> = ({ projectName }) => {
  return (
    <>
      <Paper
        elevation={14}
        sx={{
          margin: 3,
          backgroundImage: "url(/bluetri.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          padding={5}
          color="white"
          fontWeight="bold"
        >
          {projectName}
        </Typography>{" "}
      </Paper>
    </>
  );
};

export default Tiltle;
