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
          // color="transparent"
          // sx={{
          //   backgroundImage:
          //     "linear-gradient(90deg,#2ca2b4,#5598de 24%,#7f87ff 45%,#f65aad 76%,#ec3d43);",
          //   WebkitBackgroundClip: "text",
          // }}
          fontWeight="bold"
        >
          {projectName}
        </Typography>{" "}
      </Paper>
    </>
  );
};

export default Tiltle;
