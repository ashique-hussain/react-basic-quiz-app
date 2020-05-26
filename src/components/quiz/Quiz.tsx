import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import CheckboxOption from "./view/CheckboxOption";
import ButtonRow from "./view/ButtonRow";
import quizData from "./data/QuizData";
import RadioOption from "./view/RadioOption";
import RadioGroup from "@material-ui/core/RadioGroup";
import InputText from "./view/InputText";
import InputNumber from "./view/InputNumber";
import Video from "./view/Video";
import CountdownTimer from "../counter/CountdownTimer";

const QuizView = () => {
  const initialState = {
    currentQuestion: 0
  };
  const [state, setState] = useState(initialState);

  const [quiz, setQuiz] = useState({
    id: quizData[state.currentQuestion].id,
    ansType: quizData[state.currentQuestion].ansType,
    question: quizData[state.currentQuestion].question,
    options: quizData[state.currentQuestion].options,
    answer: quizData[state.currentQuestion].answer
  });

  useEffect(() => {
    setQuiz({
      id: quizData[state.currentQuestion].id,
      ansType: quizData[state.currentQuestion].ansType,
      question: quizData[state.currentQuestion].question,
      options: quizData[state.currentQuestion].options,
      answer: quizData[state.currentQuestion].answer
    });
  }, [state]);

  const nextQuestion = () => {
    setState({
      currentQuestion: state.currentQuestion + 1
    });
  };

  const [answer, setAnswer] = React.useState({});

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer({
      ...answer,
      [quiz.question.replace(" ", "_")]: {
        [event.target.name]: event.target.checked
      }
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  };

  const [isSubmit, setSubmit] = useState(false);
  const handleSubmit = () => {
    setSubmit(true);
  };

  return (
    <Box py={2}>
      {isSubmit && <Container>Answer will display here</Container>}
      {!isSubmit && (
        <Container>
          <Box display="flex" justifyContent="end" pb={1}>
            Time Remaining:{" "}
            <CountdownTimer hoursLeft="1" handleSubmit={handleSubmit} />
          </Box>

          <Box pb={2}>
            <Typography variant="h5" component="h5">
              {quiz.question}
            </Typography>
            <Box pl={2}>
              <FormGroup>
                {quiz.ansType === "checkbox" &&
                  quiz.options.map((option: any, index: number) => (
                    <Box key={quiz.id + index}>
                      <CheckboxOption
                        checkName={option.replace(" ", "")}
                        option={option}
                        handleChange={handleChangeCheckBox}
                      />
                    </Box>
                  ))}
                {quiz.ansType === "radio" && (
                  <RadioGroup
                    aria-label={quiz.question.replace(" ", "")}
                    name={quiz.question.replace(" ", "")}
                    onChange={handleChange}
                  >
                    {quiz.options.map((option: any, index: number) => (
                      <Box key={quiz.id + index}>
                        <RadioOption option={option} />
                      </Box>
                    ))}
                  </RadioGroup>
                )}

                {quiz.ansType === "text" && (
                  <InputText
                    fieldName={quiz.question.replace(" ", "")}
                    handleChange={handleChange}
                  />
                )}
                {quiz.ansType === "number" && (
                  <InputNumber
                    fieldName={quiz.question.replace(" ", "")}
                    handleChange={handleChange}
                  />
                )}
                {quiz.ansType === "video" && (
                  <Video autoPlay="true" controls="true" type="video/mp4" />
                )}
              </FormGroup>
            </Box>
          </Box>
          <ButtonRow
            nextDisable={!quizData[state.currentQuestion + 1]}
            nextHandler={nextQuestion}
            handleSubmit={handleSubmit}
          />
        </Container>
      )}
    </Box>
  );
};

export default QuizView;
