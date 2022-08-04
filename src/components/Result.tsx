import { Alert, SlideProps, Snackbar } from "@mui/material";

type resultProps = {
  open: boolean;
  handleClose: () => void;
  transition: React.ComponentType<Omit<SlideProps, "direction">> | undefined;
  state: number;
  hvntAns: number[];
  wrongAns: number[];
};

const Result: React.FC<resultProps> = ({
  open,
  handleClose,
  transition,
  state,
  hvntAns,
  wrongAns,
}) => {
  let alert: JSX.Element;
  switch (state) {
    case 1:
      alert = (
        <Alert onClose={handleClose} severity="success" variant="filled">
          答對了,給你一個大大的讚!
        </Alert>
      );
      break;
    case 2:
      alert = (
        <Alert onClose={handleClose} severity="error" variant="filled">
          Q{wrongAns.join(" ")} 答案不對哦!
        </Alert>
      );
      break;
    case 3:
      alert = (
        <Alert onClose={handleClose} severity="warning" variant="filled">
          Q{hvntAns.join(" ")} 尚未作答!
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
