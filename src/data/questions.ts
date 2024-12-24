export const questionBank: Question[] = [
  // Python Questions
  {
    id: 20,
    category: 'python',
    question: "What is the output of 2 ** 3?",
    options: ["6", "8", "9", "4"],
    correctAnswer: 1
  },
  {
    id: 21,
    category: 'python',
    question: "Which of the following is a mutable data type in Python?",
    options: ["tuple", "list", "string", "int"],
    correctAnswer: 1
  },
  {
    id: 22,
    category: 'python',
    question: "How do you create a list in Python?",
    options: ["[]", "{}", "()", "<>"],
    correctAnswer: 0
  },
  {
    id: 23,
    category: 'python',
    question: "Which of the following is used to handle exceptions in Python?",
    options: ["try", "catch", "throw", "except"],
    correctAnswer: 0
  },
  {
    id: 24,
    category: 'python',
    question: "What is the output of print(1, 2, 3, sep='-')?",
    options: ["1-2-3", "1 2 3", "1,2,3", "1:2:3"],
    correctAnswer: 0
  },
  {
    id: 25,
    category: 'python',
    question: "What is the purpose of the 'self' keyword in Python?",
    options: ["To refer to the instance of the class", "To create a class", "To define a method", "To return a value"],
    correctAnswer: 0
  },
  {
    id: 26,
    category: 'python',
    question: "Which of the following is a built-in function in Python?",
    options: ["print()", "echo()", "write()", "display()"],
    correctAnswer: 0
  },
  {
    id: 27,
    category: 'python',
    question: "What is list comprehension used for in Python?",
    options: ["Creating lists", "Creating dictionaries", "Creating sets", "Creating tuples"],
    correctAnswer: 0
  },
  {
    id: 28,
    category: 'python',
    question: "How do you start a comment in Python?",
    options: ["//", "#", "/*", "--"],
    correctAnswer: 1
  },
  {
    id: 29,
    category: 'python',
    question: "What does the 'len()' function do?",
    options: ["Returns the length of an object", "Returns the type of an object", "Returns the value of an object", "Returns the id of an object"],
    correctAnswer: 0
  },
  // Java Questions
  {
    id: 30,
    category: 'java',
    question: "Which of these is a feature of Java?",
    options: ["Platform independence", "Pointer arithmetic", "Multiple inheritance", "Operator overloading"],
    correctAnswer: 0
  },
  {
    id: 31,
    category: 'java',
    question: "What is the default value of a boolean variable in Java?",
    options: ["true", "false", "0", "null"],
    correctAnswer: 1
  },
  {
    id: 32,
    category: 'java',
    question: "Which of the following is used to create a thread in Java?",
    options: ["Runnable", "Thread", "Executor", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 33,
    category: 'java',
    question: "What is the size of an int variable in Java?",
    options: ["8 bits", "16 bits", "32 bits", "64 bits"],
    correctAnswer: 2
  },
  {
    id: 34,
    category: 'java',
    question: "Which collection class allows duplicate elements?",
    options: ["Set", "List", "Map", "Queue"],
    correctAnswer: 1
  },
  {
    id: 35,
    category: 'java',
    question: "Which of the following is a valid declaration of a char?",
    options: ["char ch = 'a';", "char ch = 'ab';", "char ch = a;", "char ch = \"a\";"],
    correctAnswer: 0
  },
  {
    id: 36,
    category: 'java',
    question: "What is the purpose of the 'finally' block in Java?",
    options: ["To handle exceptions", "To execute code regardless of exceptions", "To skip code", "To repeat code"],
    correctAnswer: 1
  },
  {
    id: 37,
    category: 'java',
    question: "Which of the following is a type of exception in Java?",
    options: ["Checked exception", "Unchecked exception", "Runtime exception", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 38,
    category: 'java',
    question: "What is the purpose of the 'break' statement in Java?",
    options: ["To exit a loop", "To skip a loop iteration", "To repeat a loop iteration", "To exit a switch statement"],
    correctAnswer: 3
  },
  {
    id: 39,
    category: 'java',
    question: "Which of the following is a valid way to declare an array in Java?",
    options: ["int[] arr = new int[5];", "int arr[] = new int[5];", "int arr = new int[5];", "int arr = {1, 2, 3, 4, 5};"],
    correctAnswer: 0
  },
  {
    id: 40,
    category: 'java',
    question: "What is the purpose of the 'abstract' keyword in Java?",
    options: ["To declare an abstract class", "To declare an interface", "To declare a method", "To declare a variable"],
    correctAnswer: 0
  },
  // JavaScript Questions
  {
    id: 41,
    category: 'javascript',
    question: "What is the output of console.log(typeof null)?",
    options: ["object", "null", "undefined", "string"],
    correctAnswer: 0
  },
  {
    id: 42,
    category: 'javascript',
    question: "Which of the following is a valid way to declare a variable in JavaScript?",
    options: ["let", "var", "const", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 43,
    category: 'javascript',
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: ["To refer to the global object", "To refer to the current object", "To refer to the parent object", "To refer to the child object"],
    correctAnswer: 1
  },
  {
    id: 44,
    category: 'javascript',
    question: "Which of the following is a built-in method in JavaScript?",
    options: ["alert()", "prompt()", "confirm()", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 45,
    category: 'javascript',
    question: "What is the purpose of the 'async' keyword in JavaScript?",
    options: ["To declare an asynchronous function", "To declare a synchronous function", "To declare a variable", "To declare a method"],
    correctAnswer: 0
  },
  {
    id: 46,
    category: 'javascript',
    question: "Which of the following is a valid way to create an object in JavaScript?",
    options: ["let obj = new Object();", "let obj = {};", "let obj = Object.create();", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 47,
    category: 'javascript',
    question: "What is the purpose of the 'prototype' property in JavaScript?",
    options: ["To create a new object", "To inherit properties from another object", "To create a new function", "To inherit methods from another function"],
    correctAnswer: 1
  },
  {
    id: 48,
    category: 'javascript',
    question: "Which of the following is a valid way to add an event listener in JavaScript?",
    options: ["element.addEventListener('click', function(){})", "element.onClick = function(){})", "element.addEventListener('click', () => {})", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 49,
    category: 'javascript',
    question: "What is the purpose of the 'JSON' object in JavaScript?",
    options: ["To parse JSON data", "To stringify JSON data", "To validate JSON data", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 50,
    category: 'javascript',
    question: "Which of the following is a valid way to declare a function in JavaScript?",
    options: ["function myFunc(){})", "let myFunc = function(){})", "let myFunc = () => {})", "All of the above"],
    correctAnswer: 3
  },
  // React Questions
  {
    id: 51,
    category: 'react',
    question: "What is the purpose of the 'state' object in React?",
    options: ["To store data", "To handle events", "To render components", "To manage state"],
    correctAnswer: 3
  },
  {
    id: 52,
    category: 'react',
    question: "Which of the following is a valid way to create a React component?",
    options: ["class MyComponent extends React.Component{}", "function MyComponent(){}", "const MyComponent = () => {}", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 53,
    category: 'react',
    question: "What is the purpose of the 'props' object in React?",
    options: ["To pass data from parent to child", "To pass data from child to parent", "To handle events", "To manage state"],
    correctAnswer: 0
  },
  {
    id: 54,
    category: 'react',
    question: "Which of the following is a valid way to handle events in React?",
    options: ["onClick={myFunc}", "onClick={() => myFunc()}", "onClick={myFunc()}", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 55,
    category: 'react',
    question: "What is the purpose of the 'key' prop in React?",
    options: ["To identify a component", "To render a component", "To handle events", "To manage state"],
    correctAnswer: 0
  },
  {
    id: 56,
    category: 'react',
    question: "Which of the following is a valid way to create a React hook?",
    options: ["useMyHook = () => {}", "const useMyHook = () => {}", "function useMyHook(){}", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 57,
    category: 'react',
    question: "What is the purpose of the 'useEffect' hook in React?",
    options: ["To handle side effects", "To handle events", "To render components", "To manage state"],
    correctAnswer: 0
  },
  {
    id: 58,
    category: 'react',
    question: "Which of the following is a valid way to use the 'useContext' hook in React?",
    options: ["const context = useContext(MyContext)", "const { context } = useContext(MyContext)", "const context = useContext(MyContext, {})", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 59,
    category: 'react',
    question: "What is the purpose of the 'useReducer' hook in React?",
    options: ["To manage state", "To handle events", "To render components", "To handle side effects"],
    correctAnswer: 0
  },
  {
    id: 60,
    category: 'react',
    question: "Which of the following is a valid way to use the 'useCallback' hook in React?",
    options: ["const myFunc = useCallback(() => {})", "const myFunc = useCallback(() => {}, [])", "const myFunc = useCallback(() => {}, {})", "All of the above"],
    correctAnswer: 3
  },
  // TypeScript Questions
  {
    id: 61,
    category: 'typescript',
    question: "What is the purpose of the 'interface' keyword in TypeScript?",
    options: ["To declare a class", "To declare an interface", "To declare a function", "To declare a variable"],
    correctAnswer: 1
  },
  {
    id: 62,
    category: 'typescript',
    question: "Which of the following is a valid way to declare a type in TypeScript?",
    options: ["type MyType = string;", "type MyType = { name: string; };", "type MyType = (name: string) => void;", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 63,
    category: 'typescript',
    question: "What is the purpose of the 'enum' keyword in TypeScript?",
    options: ["To declare a class", "To declare an interface", "To declare an enum", "To declare a function"],
    correctAnswer: 2
  },
  {
    id: 64,
    category: 'typescript',
    question: "Which of the following is a valid way to use the 'typeof' operator in TypeScript?",
    options: ["typeof myVar", "typeof myVar === 'string'", "typeof myVar === string", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 65,
 category: 'typescript',
    question: "What is the purpose of the 'as' keyword in TypeScript?",
    options: ["To cast a value", "To declare a type", "To declare an interface", "To declare a function"],
    correctAnswer: 0
  },
  {
    id: 66,
    category: 'typescript',
    question: "Which of the following is a valid way to use the 'is' keyword in TypeScript?",
    options: ["if (myVar is string) {}", "if (myVar is String) {}", "if (myVar instanceof String) {}", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 67,
    category: 'typescript',
    question: "What is the purpose of the 'namespace' keyword in TypeScript?",
    options: ["To declare a class", "To declare an interface", "To declare a namespace", "To declare a function"],
    correctAnswer: 2
  },
  {
    id: 68,
    category: 'typescript',
    question: "Which of the following is a valid way to use the 'module' keyword in TypeScript?",
    options: ["module MyModule {}", "module MyModule { export function myFunc() {} }", "module MyModule { export class MyClass {} }", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 69,
    category: 'typescript',
    question: "What is the purpose of the 'export' keyword in TypeScript?",
    options: ["To import a module", "To export a module", "To declare a class", "To declare a function"],
    correctAnswer: 1
  },
  {
    id: 70,
    category: 'typescript',
    question: "Which of the following is a valid way to use the 'import' keyword in TypeScript?",
    options: ["import * as MyModule from './MyModule';", "import { myFunc } from './MyModule';", "import MyModule from './MyModule';", "All of the above"],
    correctAnswer: 3
  },
  // General Programming Questions
  {
    id: 71,
    category: 'general',
    question: "What is the purpose of the 'algorithm'?",
    options: ["To solve a problem", "To write a program", "To design a system", "To analyze data"],
    correctAnswer: 0
  },
  {
    id: 72,
    category: 'general',
    question: "Which of the following is a type of data structure?",
    options: ["Array", "Linked list", "Stack", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 73,
    category: 'general',
    question: "What is the purpose of the 'debugging' process?",
    options: ["To write a program", "To test a program", "To fix errors in a program", "To optimize a program"],
    correctAnswer: 2
  },
  {
    id: 74,
    category: 'general',
    question: "Which of the following is a type of programming paradigm?",
    options: ["Object-oriented", "Functional", "Procedural", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 75,
    category: 'general',
    question: "What is the purpose of the 'testing' process?",
    options: ["To write a program", "To test a program", "To fix errors in a program", "To optimize a program"],
    correctAnswer: 1
  },
  {
    id: 76,
    category: 'general',
    question: "Which of the following is a type of software development methodology?",
    options: ["Agile", "Waterfall", "Scrum", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 77,
    category: 'general',
    question: "What is the purpose of the 'version control' system?",
    options: ["To manage different versions of a program", "To collaborate with other developers", "To track changes to a program", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 78,
    category: 'general',
    question: "Which of the following is a type of database?",
    options: ["Relational", "NoSQL", "Graph", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 79,
    category: 'general',
    question: "What is the purpose of the 'API'?",
    options: ["To provide a user interface", "To provide a programming interface", "To provide a data storage system", "To provide a network protocol"],
    correctAnswer: 1
  },
  {
    id: 80,
    category: 'general',
    question: "Which of the following is a type of software architecture?",
    options: ["Monolithic", "Microservices", "Event-driven", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 81,
    category: 'general',
    question: "What is the purpose of the 'design pattern'?",
    options: ["To solve a specific problem", "To write a program", "To design a system", "To analyze data"],
    correctAnswer: 0
  },
  {
    id: 82,
    category: 'general',
    question: "Which of the following is a type of programming language?",
    options: ["Statically-typed", "Dynamically-typed", "Object-oriented", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 83,
    category: 'general',
    question: "What is the purpose of the 'refactoring' process?",
    options: ["To write a program", "To test a program", "To improve the structure of a program", "To optimize a program"],
    correctAnswer: 2
  },
  {
    id: 84,
    category: 'general',
    question: "Which of the following is a type of software development tool?",
    options: ["IDE", "Text editor", "Version control system", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 85,
    category: 'general',
    question: "What is the purpose of the 'code review' process?",
    options: ["To write a program", "To test a program", "To review code written by others", "To optimize a program"],
    correctAnswer: 2
  },
  {
    id: 86,
    category: 'general',
    question: "Which of the following is a type of software testing?",
    options: ["Unit testing", "Integration testing", "System testing", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 87,
    category: 'general',
    question: "What is the purpose of the 'technical debt' concept?",
    options: ["To measure the complexity of a program", "To measure the performance of a program", "To measure the maintainability of a program", "To measure the cost of implementing a quick fix"],
    correctAnswer: 3
  },
  {
    id: 88,
    category: 'general',
    question: "Which of the following is a type of software development methodology?",
    options: ["Kanban", "Lean", "Extreme programming", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 89,
    category: 'general',
    question: "What is the purpose of the 'continuous integration' process?",
    options: ["To write a program", "To test a program", "To integrate code changes into a central repository", "To optimize a program"],
    correctAnswer: 2
  },
  {
    id: 90,
    category: 'general',
    question: "Which of the following is a type of software development tool?",
    options: ["CI/CD pipeline", "Project management tool", "Version control system", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 91,
    category: 'general',
    question: "What is the purpose of the 'code smell' concept?",
    options: ["To measure the complexity of a program", "To measure the performance of a program", "To identify potential problems in a program", "To measure the maintainability of a program"],
    correctAnswer: 2
  },
  {
    id: 92,
    category: 'general',
    question: "Which of the following is a type of software development principle?",
    options: ["SOLID", "DRY", "KISS", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 93,
    category: 'general',
    question: "What is the purpose of the 'technical requirement' document?",
    options: ["To specify the functional requirements of a program", "To specify the non-functional requirements of a program", "To specify the technical requirements of a program", "To specify the user interface of a program"],
    correctAnswer: 2
  },
  {
    id: 94,
    category: 'general',
    question: "Which of the following is a type of software development framework?",
    options: ["MVC", "MVP", "MVVM", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 95,
    category: 'general',
    question: "What is the purpose of the 'use case' diagram?",
    options: ["To model the functional requirements of a program", "To model the non-functional requirements of a program", "To model the user interactions of a program", "To model the system architecture of a program"],
    correctAnswer: 2
  },
  {
    id: 96,
    category: 'general',
    question: "Which of the following is a type of software development notation?",
    options: ["UML", "BPMN", "ERD", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 97,
    category: 'general',
    question: "What is the purpose of the 'class diagram'?",
    options: ["To model the functional requirements of a program", "To model the non-functional requirements of a program", "To model the class structure of a program", "To model the system architecture of a program"],
    correctAnswer: 2
  },
  {
    id: 98,
    category: 'general',
    question: "Which of the following is a type of software development methodology?",
    options: ["Crystal", "FDD", "JAD", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 99,
    category: 'general',
    question: "What is the purpose of the 'sequence diagram'?",
    options: ["To model the functional requirements of a program", "To model the non-functional requirements of a program", "To model the sequence of interactions between objects", "To model the system architecture of a program"],
    correctAnswer: 2
  },
  {
    id: 100,
    category: 'general',
    question: "Which of the following is a type of software development tool?",
    options: ["IDE", "Text editor", "Project management tool", "All of the above"],
    correctAnswer: 3
  },
  

{
    id: 101,
    category: 'general',
    question: "Which of the following is an example of a version control system?",
    options: ["Git", "Docker", "Kubernetes", "Nginx"],
    correctAnswer: 0
},
{
    id: 102,
    category: 'general',
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<script>", "<link>", "<css>"],
    correctAnswer: 0
},
{
    id: 103,
    category: 'general',
    question: "In databases, what does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Structured Question Language", "Sorted Query Language"],
    correctAnswer: 0
},
{
    id: 104,
    category: 'general',
    question: "Which sorting algorithm is considered the fastest for large datasets?",
    options: ["Selection Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"],
    correctAnswer: 1
},
{
    id: 105,
    category: 'general',
    question: "What is the purpose of a firewall in computer networks?",
    options: ["To encrypt data", "To monitor network traffic", "To prevent unauthorized access", "To compress data"],
    correctAnswer: 2
},
{
    id: 106,
    category: 'general',
    question: "Which of the following is a cloud computing platform?",
    options: ["AWS", "MySQL", "Docker", "Jenkins"],
    correctAnswer: 0
},
{
    id: 107,
    category: 'general',
    question: "Which language is primarily used for statistical computing and data analysis?",
    options: ["Java", "Python", "R", "HTML"],
    correctAnswer: 2
},
{
    id: 108,
    category: 'general',
    question: "What does HTTP stand for?",
    options: ["HyperText Transfer Protocol", "HyperText Transfer Program", "HyperType Transfer Protocol", "HyperType Transfer Program"],
    correctAnswer: 0
},
{
    id: 109,
    category: 'general',
    question: "In software testing, what does 'UI' stand for?",
    options: ["User Index", "Usage Information", "User Interface", "Usage Interface"],
    correctAnswer: 2
},
{
    id: 110,
    category: 'general',
    question: "Which of the following is used to make elements in CSS responsive?",
    options: ["@media queries", "@font-face", "@keyframes", "@viewport"],
    correctAnswer: 0
},
{
    id: 111,
    category: 'general',
    question: "Which database uses JSON-like documents for storing data?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    correctAnswer: 2
},
{
    id: 112,
    category: 'general',
    question: "Which of these is a continuous integration tool?",
    options: ["GitHub", "Jenkins", "Chrome DevTools", "Postman"],
    correctAnswer: 1
},
{
    id: 113,
    category: 'general',
    question: "Which of the following is not an operating system?",
    options: ["Linux", "Windows", "Git", "macOS"],
    correctAnswer: 2
},
{
    id: 114,
    category: 'general',
    question: "What is the main purpose of data encryption?",
    options: ["To compress data", "To secure data", "To delete data", "To transfer data"],
    correctAnswer: 1
},
{
    id: 115,
    category: 'general',
    question: "Which tool is used to check the responsiveness of a website?",
    options: ["Chrome DevTools", "Postman", "MySQL", "JIRA"],
    correctAnswer: 0
},
{
    id: 116,
    category: 'general',
    question: "Which file format is commonly used for data exchange?",
    options: ["XML", "JPEG", "MP4", "PNG"],
    correctAnswer: 0
},
{
    id: 117,
    category: 'general',
    question: "What is the purpose of the 'docker-compose' command?",
    options: ["To create Docker images", "To manage Docker containers", "To build and run multi-container Docker applications", "To install Docker"],
    correctAnswer: 2
},
{
    id: 118,
    category: 'general',
    question: "Which of the following tools is used for API testing?",
    options: ["Chrome", "Postman", "Git", "JIRA"],
    correctAnswer: 1
},
{
    id: 119,
    category: 'general',
    question: "In Agile methodology, what does 'sprint' mean?",
    options: ["A team meeting", "A fixed time period for development", "A project review", "A testing process"],
    correctAnswer: 1
},
{
    id: 120,
    category: 'general',
    question: "Which HTTP method is used to update data on a server?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 2
},
{
    id: 121,
    category: 'general',
    question: "Which protocol is used for secure communication over the internet?",
    options: ["HTTP", "HTTPS", "FTP", "SMTP"],
    correctAnswer: 1
},
{
    id: 122,
    category: 'general',
    question: "Which of the following is a relational database management system?",
    options: ["MongoDB", "MySQL", "Redis", "Cassandra"],
    correctAnswer: 1
},
{
    id: 123,
    category: 'general',
    question: "Which data structure uses FIFO (First In First Out) principle?",
    options: ["Stack", "Queue", "Array", "Tree"],
    correctAnswer: 1
},
{
    id: 124,
    category: 'general',
    question: "In object-oriented programming, what does 'inheritance' mean?",
    options: ["Reusing attributes and methods of an existing class", "Deleting a class", "Creating a new class", "Testing a class"],
    correctAnswer: 0
},
{
    id: 125,
    category: 'general',
    question: "Which programming language is known for its simplicity and readability?",
    options: ["Java", "C++", "Python", "Assembly"],
    correctAnswer: 2
},
{
    id: 126,
    category: 'general',
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Computer Style System", "Cascading System Style", "Computer Styling Sheets"],
    correctAnswer: 0
},
{
    id: 127,
    category: 'general',
    question: "Which of the following is a data structure that can contain both unique and duplicate elements?",
    options: ["Set", "Array", "Stack", "Graph"],
    correctAnswer: 1
},
{
    id: 128,
    category: 'general',
    question: "Which of the following is a front-end JavaScript framework?",
    options: ["Node.js", "Django", "React", "Flask"],
    correctAnswer: 2
},
{
    id: 129,
    category: 'general',
    question: "What is the primary purpose of the Java Virtual Machine (JVM)?",
    options: ["To manage files", "To run Java bytecode", "To compile Java code", "To build applications"],
    correctAnswer: 1
},
{
    id: 130,
    category: 'general',
    question: "Which of the following is an advantage of cloud computing?",
    options: ["Limited accessibility", "Cost efficiency", "Complex infrastructure", "Security risks"],
    correctAnswer: 1
},
{
    id: 131,
    category: 'general',
    question: "Which SQL clause is used to filter rows based on a condition?",
    options: ["WHERE", "FROM", "JOIN", "SELECT"],
    correctAnswer: 0
}

];
