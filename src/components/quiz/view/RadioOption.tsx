import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const RadioOption = (props: any) => {
  return (
    <FormControlLabel
      value={props.option}
      control={<Radio />}
      label={props.option}
    />
  );
};

export default RadioOption;
