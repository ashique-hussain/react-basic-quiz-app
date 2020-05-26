import React from "react";
import TextField from "@material-ui/core/TextField";

const InputText = (props: any) => {
  return (
    <TextField
      id="outlined-basic"
      type="text"
      name={props.filedName}
      onChange={props.handleChange}
      variant="outlined"
    />
  );
};

export default InputText;
