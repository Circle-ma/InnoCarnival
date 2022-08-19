import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useNavigate } from "react-router-dom";

const McAppBar: React.FC<{
  linkList: { navigate: string; projectName: string }[];
}> = ({ linkList }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src="CU.png" alt="cu" width={80}></img>
          <Typography
            variant="h3"
            fontStyle="oblique"
            marginLeft={2}
            sx={{ flexGrow: 1 }}
          >
            創新嘉年華InnoCarnival
          </Typography>
          <IconButton color="inherit" sx={{ mr: 2 }} onClick={handleClick}>
            <MenuIcon fontSize="large" />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {linkList.map((project) => {
              return (
                <MenuItem
                  onClick={() => {
                    navigate(project.navigate);
                    window.location.reload();
                  }}
                >
                  {project.projectName}
                </MenuItem>
              );
            })}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default McAppBar;
