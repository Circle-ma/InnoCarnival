import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const MaskAppBar: React.FC<{ email: string | null }> = ({ email }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src="CUlogo.svg" alt="cu" width={60}></img>
          <Typography
            variant="h4"
            fontStyle="oblique"
            marginLeft={2}
            sx={{ flexGrow: 1 }}
          >
            創新科技嘉年華InnoCarnival<Typography>{email}</Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MaskAppBar;
