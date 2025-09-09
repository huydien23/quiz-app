// Quiz configuration for different subjects
const quizConfig = {
  python: {
    name: "Python Programming",
    displayName: "🐍 Thi Trắc Nghiệm Python",
    description: "Kiểm tra kiến thức Python với 40 câu hỏi ngẫu nhiên",
    icon: "🐍",
    questionsFile: "questions.js",
    questionBank: "questionBank",
    randomFunction: "getRandomQuestions",
    numQuestions: 40,
    timeLimit: 60, // minutes
    passingScore: 60, // percentage
    author: "Nguyễn Huy Điền",
    color: "blue",
  },

  opensource: {
    name: "Open Source Software",
    displayName: "📖 Thi Trắc Nghiệm Phần Mềm Nguồn Mở",
    description:
      "Kiểm tra kiến thức về Phần mềm nguồn mở với 40 câu hỏi ngẫu nhiên",
    icon: "📖",
    questionsFile: "questions-opensource.js",
    questionBank: "openSourceQuestionBank",
    randomFunction: "getRandomOpenSourceQuestions",
    numQuestions: 40,
    timeLimit: 60, // minutes (changed from 45 to 60)
    passingScore: 60, // percentage (changed from 70 to 60)
    author: "Nguyễn Huy Điền",
    color: "green",
  },
};

// Current selected quiz subject
let currentQuizSubject = null;

// Functions to manage quiz configuration
function setQuizSubject(subject) {
  if (quizConfig[subject]) {
    currentQuizSubject = subject;
    return quizConfig[subject];
  }
  return null;
}

function getCurrentConfig() {
  return currentQuizSubject ? quizConfig[currentQuizSubject] : null;
}

function getAllSubjects() {
  return Object.keys(quizConfig);
}