import * as React from "react";
import Box from "@material-ui/core/Box";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Quiz from "./components/quiz/Quiz";
import "./styles.css";

export default function App() {
  return (
    <Box m={-1}>
      <Header />
      <Quiz />
      <Footer />
    </Box>
  );
}
