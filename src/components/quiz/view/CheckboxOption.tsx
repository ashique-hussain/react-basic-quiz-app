import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const CheckboxOption = (props: any) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={props.handleChange}
          name={props.checkName}
          color="primary"
        />
      }
      label={props.option}
    />
  );
};

export default React.memo(CheckboxOption);
