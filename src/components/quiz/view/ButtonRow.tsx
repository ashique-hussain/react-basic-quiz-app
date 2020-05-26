import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  })
);

const ButtonRow = (props: any) => {
  const classes = useStyles();
  const { nextDisable, nextHandler, handleSubmit } = props;
  return (
    <Box display="flex" justifyContent="space-between">
      <Box className={classes.root}>
        <Button
          disabled={nextDisable}
          onClick={nextHandler}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </Box>
      <Box className={classes.root}>
        <Button onClick={handleSubmit} variant="contained" color="secondary">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ButtonRow;
