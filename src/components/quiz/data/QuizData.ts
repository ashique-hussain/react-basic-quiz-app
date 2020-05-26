const quizData = [
  {
    id: 0,
    ansType: `checkbox`,
    question: ` Why so JavaScript and Java have similar name?`,
    options: [
      "JavaScript is a stripped-down version of Java",
      "JavaScript's syntax is loosely based on Java's",
      "They both originated on the island of Java",
      "None of the above"
    ],
    answer: `JavaScript's syntax is loosely based on Java's`
  },
  {
    id: 1,
    ansType: `radio`,
    question: `The external JavaScript file must contain the <script> tag.`,
    options: [`True`, `False`],
    answer: `True`
  },
  {
    id: 5,
    ansType: `radio`,
    question: `How do you create a function in JavaScript?`,
    options: [
      `function myFunction()`,
      `function = myFunction()`,
      `function:myFunction`
    ],
    answer: `function myFunction()`
  },
  {
    id: 3,
    ansType: `text`,
    question: `Which HTML attribute is used to define inline styles?`,
    answer: `style`
  },
  {
    id: 6,
    ansType: `number`,
    question: `What is the latest version of ECMAScript?`,
    answer: `10`
  },
  {
    id: 4,
    ansType: `checkbox`,
    question: `__________ JavaScript is also called server-side JavaScript.`,
    options: [`Microsoft`, `Navigator`, `LiveWire`, `Native`],
    answer: `LiveWire`
  },
  {
    id: 6,
    ansType: `video`,
    question: `World's Longest River?`,
    answer: `River Nile`
  }
];

export default quizData;
