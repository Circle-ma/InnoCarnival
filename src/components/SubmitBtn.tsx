import { Box, Button, Slide, SlideProps, Typography } from "@mui/material";

import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useBtnContext } from "../context";
import { useRef, useState } from "react";
import React from "react";
import { CardProps } from "../App";
import Result from "./Result";

type BtnPros = {
  questions: CardProps[];
};

const SubmitBtn: React.FC<BtnPros> = ({ questions }) => {
  const data = useBtnContext();
  const [btnAble, setBtnAble] = useState(false);
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);
  const [hvntAns, setHvntAns] = useState<number[]>([]);
  const [wrongAns, setWrongAns] = useState<number[]>([]);

  const state = useRef(0);
  function btnHandler() {
    state.current = 1;
    setHvntAns([]);
    setWrongAns([]);

    for (let i = 0; i < questions.length; i++) {
      if (data.UserAns[i] !== questions[i].Answer) {
        state.current = 2;
        setWrongAns((prev) => [...prev, questions[i].questionNumber]);
      }
    }

    for (let i = 0; i < questions.length; i++) {
      if (data.UserAns[i] === undefined) {
        state.current = 3;
        setHvntAns((prev) => [...prev, questions[i].questionNumber]);
      }
    }

    console.log(data.UserAns);
    setTransition(() => TransitionUp);
    setOpen(true);
    setBtnAble(true);
  }
  const handleClose = () => {
    setOpen(false);
    setBtnAble(false);
  };

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
      <Result
        open={open}
        handleClose={handleClose}
        transition={transition}
        state={state.current}
        hvntAns={hvntAns}
        wrongAns={wrongAns}
      />
    </Box>
  );
};

export default SubmitBtn;
