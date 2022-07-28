import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useBtnContext } from "../context";

type ChoiceProps = {
  option: [string, string, string, string];
  questionNumber: number;
};

const RadioButton: React.FC<ChoiceProps> = ({ option, questionNumber }) => {
  const data = useBtnContext();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    data.UserAns[questionNumber - 1] = (event.target as HTMLInputElement).value;
    data.setUserAns([...data.UserAns]);
  };
  return (
    <FormControl>
      <FormLabel>Answer:</FormLabel>
      <RadioGroup onChange={handleChange}>
        <FormControlLabel
          value="A"
          control={
            <Radio
              sx={{
                color: "#1976d2",
                "&.Mui-checked": {
                  color: "#1976d2",
                },
              }}
            />
          }
          label={option[0]}
        />
        <FormControlLabel
          value="B"
          control={
            <Radio
              sx={{
                color: "orange",
                "&.Mui-checked": {
                  color: "orange",
                },
              }}
            />
          }
          label={option[1]}
        />
        <FormControlLabel
          value="C"
          control={
            <Radio
              sx={{
                color: "green",
                "&.Mui-checked": {
                  color: "green",
                },
              }}
            />
          }
          label={option[2]}
        />
        <FormControlLabel
          value="D"
          control={
            <Radio
              sx={{
                color: "red",
                "&.Mui-checked": {
                  color: "red",
                },
              }}
            />
          }
          label={option[3]}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
