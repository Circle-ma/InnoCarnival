import { Box, Button, Slide, SlideProps, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useBtnContext } from "../UserAns";
import { useRef, useState } from "react";
import React from "react";
import Result from "./Result";
import { QuestionsProps } from "../Questions";

type BtnPros = {
  questions: QuestionsProps[];
  projectName: string;
  email: string | null;
  token: string | null;
  apps_id: string;
};

const SubmitBtn: React.FC<BtnPros> = ({
  questions,
  projectName,
  email,
  token,
  apps_id,
}) => {
  const data = useBtnContext();
  const [btnAble, setBtnAble] = useState(false);
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);
  const [hvntAns, setHvntAns] = useState<number[]>([]);
  const [wrongAns, setWrongAns] = useState<number[]>([]);

  const state = useRef(0);

  async function post(
    email: string | null,
    token: string | null,
    apps_id: string
  ) {
    let formdata = new FormData();
    let data: string = `[{"email":"${email}","token":"${token}","apps_id":"${apps_id}","score":1}]`;
    formdata.append("message", data);
    console.log(data);
    let requestOptions = {
      method: "POST",
      body: formdata,
    };

    try {
      let res = await fetch(
        "https://cuhk.iontec.com.hk/api.php",
        requestOptions
      );
      let json = await res.json();
      console.log(json);
      console.log(json.response);
    } catch (err) {
      console.log(err);
    }
  }

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

    if (state.current === 1) {
      post(email, token, apps_id);
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
        <Typography>提交答案</Typography>
      </Button>
      <Result
        open={open}
        handleClose={handleClose}
        transition={transition}
        state={state.current}
        hvntAns={hvntAns}
        wrongAns={wrongAns}
        projectName={projectName}
      />
    </Box>
  );
};

export default SubmitBtn;
