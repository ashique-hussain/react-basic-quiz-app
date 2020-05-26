import React from "react";
import TextField from "@material-ui/core/TextField";

const InputNumber = (props: any) => {
  return (
    <TextField
      id="outlined-basic"
      type="number"
      name={props.fieldName}
      onChange={props.handleChange}
      variant="outlined"
    />
  );
};

export default InputNumber;
