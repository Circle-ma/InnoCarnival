import {
  Alert,
  Box,
  Button,
  Slide,
  SlideProps,
  Snackbar,
  Typography,
} from "@mui/material";

import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useBtnContext } from "../context";
import { useRef, useState } from "react";
import React from "react";
import { CardProps } from "../App";

type BtnPros = {
  questions: CardProps[];
};

const SubmitBtn: React.FC<BtnPros> = ({ questions }) => {
  const data = useBtnContext();

  // let isQ1True: boolean = false;
  // let isQ2True: boolean = false;
  const [btnAble, setBtnAble] = useState(false);
  const [Open, setOpen] = useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const state = useRef(0);
  let alert;
  function btnHandler() {
    state.current = 1;

    for (let i = 0; i < questions.length; i++) {
      if (data.UserAns[i] !== questions[i].Answer) {
        state.current = 2;
        break;
      }
    }

    for (let i = 0; i < questions.length; i++) {
      if (data.UserAns[i] === undefined) {
        state.current = 3;
        break;
      }
    }

    // if (data.q1UserAns === q1Answer) {
    //   isQ1True = true;
    // } else {
    //   isQ1True = false;
    // }
    // if (data.q2UserAns === q2Answer) {
    //   isQ2True = true;
    // } else {
    //   isQ2True = false;
    // }

    // if (isQ1True && isQ2True) {
    //   state.current = 1;
    // } else if (data.q1UserAns === "" && data.q2UserAns === "") {
    //   state.current = 2;
    // } else if (data.q1UserAns === "") {
    //   state.current = 3;
    // } else if (data.q2UserAns === "") {
    //   state.current = 4;
    // } else if (isQ1True) {
    //   state.current = 5;
    // } else if (isQ2True) {
    //   state.current = 6;
    // } else {
    //   state.current = 7;
    // }
    console.log(data.UserAns);
    setTransition(() => TransitionUp);
    setOpen(true);
    setBtnAble(true);
  }
  const handleClose = () => {
    setOpen(false);
    setBtnAble(false);
  };

  switch (state.current) {
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
    // case 4:
    //   alert = (
    //     <Alert onClose={handleClose} severity="warning" variant="filled">
    //       q2 hvnt ans
    //     </Alert>
    //   );
    //   break;
    // case 5:
    //   alert = (
    //     <Alert onClose={handleClose} severity="error" variant="filled">
    //       q2 is wrong
    //     </Alert>
    //   );
    //   break;
    // case 6:
    //   alert = (
    //     <Alert onClose={handleClose} severity="error" variant="filled">
    //       q1 is wrong
    //     </Alert>
    //   );
    //   break;
    default:
      alert = (
        <Alert onClose={handleClose} severity="error" variant="filled">
          rubbish
        </Alert>
      );
  }

  type TransitionProps = Omit<SlideProps, "direction">;

  function TransitionUp(props: TransitionProps) {
    return <Slide {...props} direction="up" />;
  }

  return (
    <Box textAlign={"center"} padding={3}>
      <Button
        size="large"
        variant="contained"
        startIcon={<DoneAllIcon color="secondary" />}
        onClick={btnHandler}
        disabled={btnAble}
      >
        <Typography>Submit</Typography>
      </Button>
      <Snackbar
        open={Open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={transition}
      >
        {alert}
      </Snackbar>
    </Box>
  );
};

export default SubmitBtn;
