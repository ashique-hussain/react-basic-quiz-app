import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    center: {
      display: "flex",
      justifyContent: "center"
    },
    background: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    }
  })
);

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.background} p={1}>
      <Container className={classes.center}>
        copyright &copy; 2020 | By Ashique Hussain Ansari
      </Container>
    </Box>
  );
};
export default Footer;
