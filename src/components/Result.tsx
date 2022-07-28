import { Alert, SlideProps, Snackbar } from "@mui/material";

type resultProps = {
  open: boolean;
  handleClose: () => void;
  transition: React.ComponentType<Omit<SlideProps, "direction">> | undefined;
  state: number;
};

const Result: React.FC<resultProps> = ({
  open,
  handleClose,
  transition,
  state,
}) => {
  let alert: JSX.Element;
  switch (state) {
    case 1:
      alert = (
        <Alert onClose={handleClose} severity="success" variant="filled">
          nice
        </Alert>
      );
      break;
    case 2:
      alert = (
        <Alert onClose={handleClose} severity="error" variant="filled">
          wrong
        </Alert>
      );
      break;
    case 3:
      alert = (
        <Alert onClose={handleClose} severity="warning" variant="filled">
          some q hvnt ans
        </Alert>
      );
      break;
    default:
      alert = (
        <Alert onClose={handleClose} severity="error" variant="filled">
          rubbish
        </Alert>
      );
  }
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      TransitionComponent={transition}
    >
      {alert}
    </Snackbar>
  );
};

export default Result;
