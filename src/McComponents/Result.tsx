import { Alert, AlertTitle, SlideProps, Snackbar } from "@mui/material";

type resultProps = {
  open: boolean;
  handleClose: () => void;
  transition: React.ComponentType<Omit<SlideProps, "direction">> | undefined;
  state: number;
  hvntAns: number[];
  wrongAns: number[];
  projectName: string;
};

const Result: React.FC<resultProps> = ({
  open,
  handleClose,
  transition,
  state,
  hvntAns,
  wrongAns,
  projectName,
}) => {
  let alert: JSX.Element;
  switch (state) {
    case 1:
      alert = (
        <Alert onClose={handleClose} severity="success" variant="filled">
          <AlertTitle>{projectName}</AlertTitle>
          恭喜你答對了！已得1分，請關閉視窗，繼續玩其他遊戲。
        </Alert>
      );
      break;
    case 2:
      alert = (
        <Alert onClose={handleClose} severity="error" variant="filled">
          <AlertTitle>{projectName}</AlertTitle>Q{wrongAns.join(" ")}{" "}
          答案不對哦!
        </Alert>
      );
      break;
    case 3:
      alert = (
        <Alert onClose={handleClose} severity="warning" variant="filled">
          <AlertTitle>{projectName}</AlertTitle>Q{hvntAns.join(" ")} 尚未作答!
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
