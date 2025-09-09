// Multi-Subject Quiz application main script
class QuizApp {
  constructor() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.timeRemaining = 60 * 60; // Default 60 minutes in seconds
    this.timerInterval = null;
    this.isQuizStarted = false;
    this.isQuizCompleted = false;
    this.currentConfig = null;

    this.initializeElements();
    this.attachEventListeners();
  }

  initializeElements() {
    // Screen elements
    this.subjectScreen = document.getElementById("subjectScreen");
    this.startScreen = document.getElementById("startScreen");
    this.quizScreen = document.getElementById("quizScreen");
    this.resultsScreen = document.getElementById("resultsScreen");
    this.reviewScreen = document.getElementById("reviewScreen");

    // Quiz elements
    this.timerElement = document.getElementById("timer");
    this.currentQuestionElement = document.getElementById("currentQuestion");
    this.totalQuestionsElement = document.getElementById("totalQuestions");
    this.questionTextElement = document.getElementById("questionText");
    this.answerOptionsElement = document.getElementById("answerOptions");
    this.questionNumbersElement = document.getElementById("questionNumbers");

    // Button elements
    this.startBtn = document.getElementById("startBtn");
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");
    this.submitBtn = document.getElementById("submitBtn");
    this.restartBtn = document.getElementById("restartBtn");
    this.reviewBtn = document.getElementById("reviewBtn");
    this.backToResultsBtn = document.getElementById("backToResultsBtn");

    // New buttons
    this.resetQuizBtn = document.getElementById("resetQuizBtn");
    this.cancelQuizBtn = document.getElementById("cancelQuizBtn");

    // Print buttons
    this.printQuizBtn = document.getElementById("printQuizBtn");
    this.printResultBtn = document.getElementById("printResultBtn");
    this.printAnswerKeyBtn = document.getElementById("printAnswerKeyBtn");

    // Print modal elements
    this.printModal = document.getElementById("printModal");
    this.closePrintModalBtn = document.getElementById("closePrintModal");
    this.printArea = document.getElementById("printArea");

    // Cancel modal elements
    this.cancelModal = document.getElementById("cancelModal");
    this.confirmCancelBtn = document.getElementById("confirmCancelBtn");
    this.keepQuizBtn = document.getElementById("keepQuizBtn");

    // Results elements
    this.finalScoreElement = document.getElementById("finalScore");
    this.percentageElement = document.getElementById("percentage");
    this.resultMessageElement = document.getElementById("resultMessage");
    this.scoreIconElement = document.getElementById("scoreIcon");
    this.reviewContentElement = document.getElementById("reviewContent");

    // Back to top button
    this.backToTopBtn = document.getElementById("backToTopBtn");
  }

  attachEventListeners() {
    // Subject selection
    const subjectCards = document.querySelectorAll(".quiz-subject-card");
    subjectCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        const subject = e.currentTarget.getAttribute("data-subject");
        this.selectSubject(subject);
      });
    });

    if (this.startBtn) {
      this.startBtn.addEventListener("click", () => this.startQuiz());
    }
    this.prevBtn.addEventListener("click", () => this.previousQuestion());
    this.nextBtn.addEventListener("click", () => this.nextQuestion());
    this.submitBtn.addEventListener("click", () => this.submitQuiz());
    this.restartBtn.addEventListener("click", () => this.restartQuiz());
    this.reviewBtn.addEventListener("click", () => this.showReview());
    this.backToResultsBtn.addEventListener("click", () => this.showResults());

    // New button event listeners
    if (this.resetQuizBtn) {
      this.resetQuizBtn.addEventListener("click", () => {
        this.resetCurrentAnswer();
      });
    }

    if (this.cancelQuizBtn) {
      this.cancelQuizBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (
          confirm(
            "Bạn có chắc chắn muốn hủy bài thi không? Tất cả câu trả lời sẽ bị mất!"
          )
        ) {
          this.directCancelQuiz();
        }
      });
    }

    // Cancel modal event listeners
    if (this.confirmCancelBtn) {
      this.confirmCancelBtn.addEventListener("click", () =>
        this.confirmCancelQuiz()
      );
    }
    if (this.keepQuizBtn) {
      this.keepQuizBtn.addEventListener("click", () => this.hideCancelModal());
    }

    // Close modal when clicking outside
    if (this.cancelModal) {
      this.cancelModal.addEventListener("click", (e) => {
        if (e.target === this.cancelModal) {
          this.hideCancelModal();
        }
      });
    }

    // Print event listeners
    this.printQuizBtn.addEventListener("click", () => this.showPrintModal());
    this.printResultBtn.addEventListener("click", () => this.printResult());
    this.printAnswerKeyBtn.addEventListener("click", () =>
      this.printAnswerKey()
    );
    this.closePrintModalBtn.addEventListener("click", () =>
      this.hidePrintModal()
    );

    // Initially disable print quiz button until quiz starts
    if (this.printQuizBtn) {
      this.printQuizBtn.disabled = true;
      this.printQuizBtn.classList.add("opacity-50", "cursor-not-allowed");
      this.printQuizBtn.title = "Bắt đầu quiz để in đề";
    }

    // Initially disable reset and cancel buttons until quiz starts
    if (this.resetQuizBtn) {
      this.resetQuizBtn.disabled = true;
      this.resetQuizBtn.classList.add("opacity-50", "cursor-not-allowed");
      this.resetQuizBtn.title = "Bắt đầu quiz để sử dụng";
    }

    if (this.cancelQuizBtn) {
      this.cancelQuizBtn.disabled = true;
      this.cancelQuizBtn.classList.add("opacity-50", "cursor-not-allowed");
      this.cancelQuizBtn.title = "Bắt đầu quiz để sử dụng";
    }

    // Print option listeners
    document.querySelectorAll(".print-option-card").forEach((card) => {
      card.addEventListener("click", () => {
        const printType = card.dataset.printType;
        this.handlePrint(printType);
      });
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (!this.isQuizStarted || this.isQuizCompleted) return;

      if (e.key === "ArrowLeft") this.previousQuestion();
      if (e.key === "ArrowRight") this.nextQuestion();
      if (e.key >= "1" && e.key <= "4") {
        const optionIndex = parseInt(e.key) - 1;
        this.selectAnswer(optionIndex);
      }

      // New keyboard shortcuts
      if (e.key === "r" || e.key === "R") {
        e.preventDefault();
        this.resetCurrentAnswer();
      }
      if (e.key === "Escape") {
        e.preventDefault();
        this.showCancelModal();
      }
    });

    // Mobile swipe gestures for question navigation
    this.setupSwipeGestures();

    // Mobile floating navigation
    this.setupMobileNavigation();

    // Back to top button functionality
    this.setupBackToTopButton();

    // Prevent page refresh during quiz
    window.addEventListener("beforeunload", (e) => {
      if (this.isQuizStarted && !this.isQuizCompleted) {
        e.preventDefault();
        e.returnValue = "";
      }
    });
  }

  selectSubject(subject) {
    // Set the quiz configuration
    this.currentConfig = setQuizSubject(subject);
    if (!this.currentConfig) {
      alert("Chủ đề không hợp lệ!");
      return;
    }

    // Update start screen with subject info
    this.updateStartScreen();

    // Show start screen
    this.showScreen("start");
  }

  updateStartScreen() {
    if (!this.currentConfig) return;

    const startScreen = this.startScreen;
    startScreen.innerHTML = `
            <div class="max-w-2xl mx-auto quiz-card p-8 text-center">
                <div class="mb-8">
                    <div class="text-6xl mb-4">${this.currentConfig.icon}</div>
                    <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-${this.currentConfig.color}-600 to-${this.currentConfig.color}-800 mb-6">
                        ${this.currentConfig.displayName}
                        <span class="inline-block text-xs font-normal bg-${this.currentConfig.color}-500 text-white px-2 py-1 rounded-full ml-2 align-middle">v2.0</span>
                    </h1>
                    <p class="text-gray-600 mb-4 text-lg">${this.currentConfig.description}</p>
                    <div class="bg-gradient-to-r from-${this.currentConfig.color}-50 to-cyan-50 p-4 rounded-lg mb-6">
                        <p class="text-${this.currentConfig.color}-800 font-semibold flex items-center justify-center">
                            <span class="mr-2">👨‍💻</span>
                            <span>Được phát triển bởi: <strong>${this.currentConfig.author}</strong></span>
                        </p>
                    </div>
                </div>
                <div class="quiz-card p-6 mb-8 bg-gradient-to-r from-${this.currentConfig.color}-50 to-cyan-50">
                    <p class="text-${this.currentConfig.color}-800 font-semibold mb-4"><strong>📋 Hướng dẫn:</strong></p>
                    <ul class="text-left text-${this.currentConfig.color}-700 space-y-3">
                        <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> ${this.currentConfig.numQuestions} câu hỏi được chọn ngẫu nhiên từ ngân hàng câu hỏi</li>
                        <li class="flex items-center"><span class="text-green-500 mr-2">⏱️</span> Thời gian làm bài: ${this.currentConfig.timeLimit} phút</li>
                        <li class="flex items-center"><span class="text-green-500 mr-2">🎯</span> Chọn đáp án đúng nhất cho mỗi câu hỏi</li>
                        <li class="flex items-center"><span class="text-green-500 mr-2">🔄</span> Bạn có thể chuyển đổi giữa các câu hỏi</li>
                    </ul>
                </div>
                <div class="flex justify-center space-x-4">
                    <button id="backToSubjectBtn" class="btn btn-secondary py-4 px-8 text-lg font-bold">
                        ← Chọn lại chủ đề
                    </button>
                    <button id="startBtn" class="btn btn-primary py-4 px-10 text-lg font-bold shadow-xl">
                        🚀 Bắt Đầu Thi
                    </button>
                </div>
            </div>
        `;

    // Re-attach event listeners for new buttons
    const startBtn = document.getElementById("startBtn");
    const backBtn = document.getElementById("backToSubjectBtn");

    if (startBtn) {
      startBtn.addEventListener("click", () => this.startQuiz());
    }
    if (backBtn) {
      backBtn.addEventListener("click", () => this.showScreen("subject"));
    }
  }

  startQuiz() {
    if (!this.currentConfig) {
      alert("Vui lòng chọn chủ đề trước!");
      return;
    }

    // Load questions based on current subject
    this.loadQuestionsForCurrentSubject();
    this.userAnswers = new Array(this.questions.length).fill(-1);
    this.currentQuestionIndex = 0;
    this.timeRemaining = this.currentConfig.timeLimit * 60; // Convert minutes to seconds
    this.isQuizStarted = true;
    this.isQuizCompleted = false;

    this.showScreen("quiz");
    this.createQuestionNumbers();
    this.displayQuestion();
    this.startTimer();
    this.updateTotalQuestions();

    // Enable print button now that we have questions
    if (this.printQuizBtn) {
      this.printQuizBtn.disabled = false;
      this.printQuizBtn.classList.remove("opacity-50", "cursor-not-allowed");
      this.printQuizBtn.title = "In đề thi";
    }

    // Enable reset and cancel buttons now that quiz has started
    if (this.resetQuizBtn) {
      this.resetQuizBtn.disabled = false;
      this.resetQuizBtn.classList.remove("opacity-50", "cursor-not-allowed");
      this.resetQuizBtn.title = "Reset câu trả lời hiện tại";
    }

    if (this.cancelQuizBtn) {
      this.cancelQuizBtn.disabled = false;
      this.cancelQuizBtn.classList.remove("opacity-50", "cursor-not-allowed");
      this.cancelQuizBtn.title = "Hủy bài thi";
    }
  }

  loadQuestionsForCurrentSubject() {
    if (!this.currentConfig) return;

    // Get questions based on current subject
    if (this.currentConfig.name === "Python Programming") {
      this.questions = getRandomQuestions(this.currentConfig.numQuestions);
    } else if (this.currentConfig.name === "Open Source Software") {
      this.questions = getRandomOpenSourceQuestions(
        this.currentConfig.numQuestions
      );
    }
  }

  showScreen(screenName) {
    // Hide all screens first
    const screens = [
      "subjectScreen",
      "startScreen",
      "quizScreen",
      "resultsScreen",
      "reviewScreen",
    ];
    screens.forEach((screen) => {
      const element = document.getElementById(screen);
      if (element) element.classList.add("hidden");
    });

    // Show the requested screen
    switch (screenName) {
      case "subject":
        this.subjectScreen.classList.remove("hidden");
        break;
      case "start":
        this.startScreen.classList.remove("hidden");
        break;
      case "quiz":
        this.quizScreen.classList.remove("hidden");
        break;
      case "results":
        this.resultsScreen.classList.remove("hidden");
        break;
      case "review":
        this.reviewScreen.classList.remove("hidden");
        break;
    }
  }

  createQuestionNumbers() {
    this.questionNumbersElement.innerHTML = "";
    for (let i = 0; i < this.questions.length; i++) {
      const numberBtn = document.createElement("button");
      numberBtn.className = "question-number unanswered";
      numberBtn.textContent = i + 1;
      numberBtn.addEventListener("click", () => this.goToQuestion(i));
      this.questionNumbersElement.appendChild(numberBtn);
    }
  }

  updateQuestionNumbers() {
    const numberButtons = this.questionNumbersElement.children;
    for (let i = 0; i < numberButtons.length; i++) {
      const btn = numberButtons[i];
      btn.className = "question-number";

      if (i === this.currentQuestionIndex) {
        btn.classList.add("current");
      } else if (this.userAnswers[i] !== -1) {
        btn.classList.add("answered");
      } else {
        btn.classList.add("unanswered");
      }
    }
  }

  displayQuestion() {
    const question = this.questions[this.currentQuestionIndex];
    this.questionTextElement.textContent = question.question;
    this.currentQuestionElement.textContent = this.currentQuestionIndex + 1;

    this.answerOptionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
      const optionDiv = document.createElement("div");
      optionDiv.className = "answer-option p-6 cursor-pointer";
      optionDiv.innerHTML = `
                <label class="flex items-center cursor-pointer">
                    <input type="radio" name="answer" value="${index}" class="mr-4" ${
        this.userAnswers[this.currentQuestionIndex] === index ? "checked" : ""
      }>
                    <span class="text-gray-800 text-lg">${option}</span>
                </label>
            `;

      optionDiv.addEventListener("click", () => this.selectAnswer(index));
      this.answerOptionsElement.appendChild(optionDiv);
    });

    // Add fade-in animation
    this.answerOptionsElement.classList.add("fade-in");
    setTimeout(() => {
      this.answerOptionsElement.classList.remove("fade-in");
    }, 600);

    this.updateNavigationButtons();
    this.updateQuestionNumbers();
  }

  selectAnswer(answerIndex) {
    this.userAnswers[this.currentQuestionIndex] = answerIndex;

    // Update radio buttons
    const radioButtons = this.answerOptionsElement.querySelectorAll(
      'input[type="radio"]'
    );
    radioButtons.forEach((radio, index) => {
      radio.checked = index === answerIndex;
    });

    // Update visual selection
    const optionDivs =
      this.answerOptionsElement.querySelectorAll(".answer-option");
    optionDivs.forEach((div, index) => {
      if (index === answerIndex) {
        div.classList.add("selected");
      } else {
        div.classList.remove("selected");
      }
    });

    this.updateQuestionNumbers();
  }

  goToQuestion(index) {
    if (index >= 0 && index < this.questions.length) {
      this.currentQuestionIndex = index;
      this.displayQuestion();
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.displayQuestion();
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.displayQuestion();
    }
  }

  updateNavigationButtons() {
    this.prevBtn.disabled = this.currentQuestionIndex === 0;
    this.nextBtn.style.display =
      this.currentQuestionIndex === this.questions.length - 1
        ? "none"
        : "block";
  }

  updateTotalQuestions() {
    this.totalQuestionsElement.textContent = this.questions.length;
  }

  startTimer() {
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      this.updateTimerDisplay();

      if (this.timeRemaining <= 300) {
        // 5 minutes warning
        this.timerElement.classList.add("timer-warning");
      }

      if (this.timeRemaining <= 0) {
        this.submitQuiz();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    this.timerElement.textContent = `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  submitQuiz() {
    if (!this.isQuizStarted || this.isQuizCompleted) return;

    const unansweredCount = this.userAnswers.filter(
      (answer) => answer === -1
    ).length;

    if (unansweredCount > 0) {
      const confirmSubmit = confirm(
        `Bạn còn ${unansweredCount} câu chưa trả lời. Bạn có chắc muốn nộp bài không?`
      );
      if (!confirmSubmit) return;
    }

    this.isQuizCompleted = true;
    this.isQuizStarted = false;
    clearInterval(this.timerInterval);

    this.calculateResults();
    this.showResults();
  }

  calculateResults() {
    let correctAnswers = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.userAnswers[i] === this.questions[i].correct) {
        correctAnswers++;
      }
    }

    this.correctCount = correctAnswers;
    this.wrongCount = this.questions.length - correctAnswers;
    this.score = correctAnswers * 0.25; // Each correct answer = 0.25 points
    this.maxScore = this.questions.length * 0.25; // Total possible score = 10 points
    this.percentage = Math.round(
      (correctAnswers / this.questions.length) * 100
    );
  }

  showResults() {
    this.showScreen("results");

    // Display score in new format
    this.finalScoreElement.textContent = `Điểm: ${this.score.toFixed(2)}/10.00`;
    this.percentageElement.textContent = `${this.percentage}%`;

    // Remove any existing score breakdown to prevent duplication
    const existingBreakdown = document.querySelector(".score-breakdown");
    if (existingBreakdown) {
      existingBreakdown.remove();
    }

    // Add detailed score breakdown
    const scoreBreakdown = document.createElement("div");
    scoreBreakdown.className = "score-breakdown mb-6";
    scoreBreakdown.innerHTML = `
            <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
                <div class="grid grid-cols-3 gap-4 text-center">
                    <div class="score-detail">
                        <div class="text-2xl font-bold text-green-600">${
                          this.correctCount
                        }</div>
                        <div class="text-sm text-gray-600">Câu đúng</div>
                    </div>
                    <div class="score-detail">
                        <div class="text-2xl font-bold text-red-600">${
                          this.wrongCount
                        }</div>
                        <div class="text-sm text-gray-600">Câu sai</div>
                    </div>
                    <div class="score-detail">
                        <div class="text-2xl font-bold text-blue-600">${this.score.toFixed(
                          2
                        )}</div>
                        <div class="text-sm text-gray-600">Điểm số</div>
                    </div>
                </div>
                <div class="mt-3 text-center text-sm text-gray-500">
                    <span>Mỗi câu đúng = 0.25 điểm | Thang điểm 10</span>
                </div>
            </div>
        `;

    // Insert score breakdown before result message
    const resultMessage = this.resultMessageElement;
    resultMessage.parentNode.insertBefore(scoreBreakdown, resultMessage);

    let message, icon;
    
    // Get subject-specific information
    const subjectName = this.currentConfig ? this.currentConfig.name : "Python Programming";
    
    if (this.percentage >= 90) {
      if (subjectName === "Python Programming") {
        message = "Xuất sắc! Bạn có kiến thức Python rất tốt!";
      } else if (subjectName === "Open Source Software") {
        message = "Xuất sắc! Bạn có kiến thức về Phần mềm Nguồn Mở rất tốt!";
      } else {
        message = "Xuất sắc! Bạn đã hoàn thành bài thi một cách xuất sắc!";
      }
      icon = "🏆";
      this.resultMessageElement.className =
        "text-lg mb-6 p-4 rounded-lg bg-green-100 text-green-800";
    } else if (this.percentage >= 80) {
      if (subjectName === "Python Programming") {
        message = "Tốt lắm! Bạn đã nắm vững kiến thức Python!";
      } else if (subjectName === "Open Source Software") {
        message = "Tốt lắm! Bạn đã nắm vững kiến thức về Phần mềm Nguồn Mở!";
      } else {
        message = "Tốt lắm! Bạn đã hoàn thành bài thi một cách tốt!";
      }
      icon = "🎉";
      this.resultMessageElement.className =
        "text-lg mb-6 p-4 rounded-lg bg-blue-100 text-blue-800";
    } else if (this.percentage >= 60) {
      if (subjectName === "Python Programming") {
        message = "Khá tốt! Bạn cần ôn luyện thêm một số kiến thức Python.";
      } else if (subjectName === "Open Source Software") {
        message = "Khá tốt! Bạn cần ôn luyện thêm một số kiến thức về Phần mềm Nguồn Mở.";
      } else {
        message = "Khá tốt! Bạn cần ôn luyện thêm một số kiến thức.";
      }
      icon = "👍";
      this.resultMessageElement.className =
        "text-lg mb-6 p-4 rounded-lg bg-yellow-100 text-yellow-800";
    } else {
      if (subjectName === "Python Programming") {
        message = "Cần cố gắng hơn! Hãy ôn lại kiến thức Python cơ bản.";
      } else if (subjectName === "Open Source Software") {
        message = "Cần cố gắng hơn! Hãy ôn lại kiến thức về Phần mềm Nguồn Mở cơ bản.";
      } else {
        message = "Cần cố gắng hơn! Hãy ôn lại kiến thức cơ bản.";
      }
      icon = "📚";
      this.resultMessageElement.className =
        "text-lg mb-6 p-4 rounded-lg bg-red-100 text-red-800";
    }

    this.resultMessageElement.textContent = message;
    this.scoreIconElement.textContent = icon;
  }

  showReview() {
    this.showScreen("review");
    this.createReviewContent();
  }

  createReviewContent() {
    this.reviewContentElement.innerHTML = "";

    this.questions.forEach((question, index) => {
      const reviewItem = document.createElement("div");
      reviewItem.className = "quiz-card p-6 fade-in";

      const isCorrect = this.userAnswers[index] === question.correct;
      const userAnswerText =
        this.userAnswers[index] !== -1
          ? question.options[this.userAnswers[index]]
          : "Không trả lời";
      const correctAnswerText = question.options[question.correct];

      reviewItem.innerHTML = `
                <div class="flex items-center justify-between mb-6">
                    <h3 class="text-xl font-bold text-gray-800">📝 Câu ${
                      index + 1
                    }</h3>
                    <span class="px-4 py-2 rounded-full text-sm font-bold ${
                      isCorrect
                        ? "bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300"
                        : "bg-gradient-to-r from-red-100 to-red-200 text-red-800 border border-red-300"
                    }">
                        ${isCorrect ? "✅ Đúng" : "❌ Sai"}
                    </span>
                </div>
                <p class="text-gray-800 mb-6 text-lg leading-relaxed">${
                  question.question
                }</p>
                <div class="space-y-4 mb-6">
                    <div class="p-4 rounded-xl ${
                      isCorrect ? "message-success" : "message-error"
                    }">
                        <strong>🎯 Câu trả lời của bạn:</strong> ${userAnswerText}
                    </div>
                    ${
                      !isCorrect
                        ? `
                        <div class="p-4 rounded-xl message-success">
                            <strong>✅ Đáp án đúng:</strong> ${correctAnswerText}
                        </div>
                    `
                        : ""
                    }
                </div>
                ${
                  question.explanation
                    ? `
                    <div class="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                        <strong>💡 Giải thích:</strong> ${question.explanation}
                    </div>
                `
                    : ""
                }
            `;

      this.reviewContentElement.appendChild(reviewItem);
    });
  }

  restartQuiz() {
    this.isQuizStarted = false;
    this.isQuizCompleted = false;
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.questions = [];
    this.timeRemaining = 60 * 60;
    this.currentConfig = null;

    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    this.timerElement.classList.remove("timer-warning");

    // Disable print button again since we're restarting
    if (this.printQuizBtn) {
      this.printQuizBtn.disabled = true;
      this.printQuizBtn.classList.add("opacity-50", "cursor-not-allowed");
      this.printQuizBtn.title = "Bắt đầu quiz để in đề";
    }

    // Disable reset and cancel buttons again since we're restarting
    if (this.resetQuizBtn) {
      this.resetQuizBtn.disabled = true;
      this.resetQuizBtn.classList.add("opacity-50", "cursor-not-allowed");
      this.resetQuizBtn.title = "Bắt đầu quiz để sử dụng";
    }

    if (this.cancelQuizBtn) {
      this.cancelQuizBtn.disabled = true;
      this.cancelQuizBtn.classList.add("opacity-50", "cursor-not-allowed");
      this.cancelQuizBtn.title = "Bắt đầu quiz để sử dụng";
    }

    this.showScreen("subject");
  }

  // Reset and Cancel functionality
  resetCurrentAnswer() {
    if (!this.isQuizStarted || this.isQuizCompleted) {
      return;
    }

    // Reset the current question's answer
    this.userAnswers[this.currentQuestionIndex] = -1;

    // Update the display
    this.displayQuestion();

    // Show feedback
    this.showTemporaryMessage("🔄 Đã reset câu trả lời!", "success");
  }

  showCancelModal() {
    if (!this.isQuizStarted || this.isQuizCompleted) {
      return;
    }

    if (!this.cancelModal) {
      return;
    }

    this.cancelModal.classList.remove("hidden");
    this.cancelModal.classList.add("flex");
    this.cancelModal.style.display = "flex";
  }

  hideCancelModal() {
    if (!this.cancelModal) {
      return;
    }

    this.cancelModal.classList.add("hidden");
    this.cancelModal.classList.remove("flex");
    this.cancelModal.style.display = "none";
  }

  confirmCancelQuiz() {
    this.hideCancelModal();

    // Stop the timer if running
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    // Reset quiz state
    this.isQuizStarted = false;
    this.isQuizCompleted = false;
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.questions = [];
    this.timeRemaining = 60 * 60;

    // Remove timer warning if present
    this.timerElement.classList.remove("timer-warning");

    // Disable all quiz-related buttons
    if (this.printQuizBtn) {
      this.printQuizBtn.disabled = true;
      this.printQuizBtn.classList.add("opacity-50", "cursor-not-allowed");
      this.printQuizBtn.title = "Bắt đầu quiz để in đề";
    }

    if (this.resetQuizBtn) {
      this.resetQuizBtn.disabled = true;
      this.resetQuizBtn.classList.add("opacity-50", "cursor-not-allowed");
      this.resetQuizBtn.title = "Bắt đầu quiz để sử dụng";
    }

    if (this.cancelQuizBtn) {
      this.cancelQuizBtn.disabled = true;
      this.cancelQuizBtn.classList.add("opacity-50", "cursor-not-allowed");
      this.cancelQuizBtn.title = "Bắt đầu quiz để sử dụng";
    }

    // Show success message and immediately redirect to start screen
    this.showTemporaryMessage("✅ Đã hủy bài thi thành công!", "success");

    // Immediately show start screen
    this.showScreen("start");
  }

  directCancelQuiz() {
    // Stop the timer if running
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    // Reset quiz state
    this.isQuizStarted = false;
    this.isQuizCompleted = false;
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.questions = [];
    this.timeRemaining = 60 * 60;
    this.currentConfig = null;

    // Remove timer warning if present
    this.timerElement.classList.remove("timer-warning");

    // Disable all quiz-related buttons
    if (this.printQuizBtn) {
      this.printQuizBtn.disabled = true;
      this.printQuizBtn.classList.add("opacity-50", "cursor-not-allowed");
      this.printQuizBtn.title = "Bắt đầu quiz để in đề";
    }

    if (this.resetQuizBtn) {
      this.resetQuizBtn.disabled = true;
      this.resetQuizBtn.classList.add("opacity-50", "cursor-not-allowed");
      this.resetQuizBtn.title = "Bắt đầu quiz để sử dụng";
    }

    if (this.cancelQuizBtn) {
      this.cancelQuizBtn.disabled = true;
      this.cancelQuizBtn.classList.add("opacity-50", "cursor-not-allowed");
      this.cancelQuizBtn.title = "Bắt đầu quiz để sử dụng";
    }

    // Show success message
    this.showTemporaryMessage("✅ Đã hủy bài thi thành công!", "success");

    // Go to subject screen
    this.showScreen("subject");
  }

  showTemporaryMessage(message, type = "info") {
    // Create or get existing message container
    let messageContainer = document.getElementById("temporaryMessage");
    if (!messageContainer) {
      messageContainer = document.createElement("div");
      messageContainer.id = "temporaryMessage";
      messageContainer.className =
        "fixed top-4 right-4 z-50 p-4 rounded-lg font-semibold shadow-lg transition-all duration-300";
      document.body.appendChild(messageContainer);
    }

    // Set message and style based on type
    messageContainer.textContent = message;
    messageContainer.className =
      "fixed top-4 right-4 z-50 p-4 rounded-lg font-semibold shadow-lg transition-all duration-300";

    switch (type) {
      case "success":
        messageContainer.classList.add(
          "bg-green-100",
          "text-green-800",
          "border",
          "border-green-300"
        );
        break;
      case "warning":
        messageContainer.classList.add(
          "bg-yellow-100",
          "text-yellow-800",
          "border",
          "border-yellow-300"
        );
        break;
      case "error":
        messageContainer.classList.add(
          "bg-red-100",
          "text-red-800",
          "border",
          "border-red-300"
        );
        break;
      default:
        messageContainer.classList.add(
          "bg-blue-100",
          "text-blue-800",
          "border",
          "border-blue-300"
        );
    }

    // Show message
    messageContainer.style.opacity = "1";
    messageContainer.style.transform = "translateX(0)";

    // Hide message after 3 seconds
    setTimeout(() => {
      messageContainer.style.opacity = "0";
      messageContainer.style.transform = "translateX(100%)";
    }, 3000);
  }

  // Enhanced print functionality with better data validation
  showPrintModal() {
    // Check if quiz has started and has questions
    if (!this.questions || this.questions.length === 0) {
      this.showTemporaryMessage(
        "⚠️ Vui lòng bắt đầu quiz trước khi in đề!",
        "warning"
      );
      return;
    }

    this.printModal.classList.remove("hidden");
    this.printModal.classList.add("flex");
  }

  hidePrintModal() {
    if (!this.printModal) {
      return;
    }

    this.printModal.classList.add("hidden");
    this.printModal.classList.remove("flex");
  }

  handlePrint(printType) {
    // Enhanced validation with user feedback
    if (!this.questions || this.questions.length === 0) {
      this.showTemporaryMessage(
        "⚠️ Không có dữ liệu để in! Vui lòng bắt đầu quiz trước.",
        "error"
      );
      this.hidePrintModal();
      return;
    }

    // Show loading message
    this.showTemporaryMessage("🖨️ Đang chuẩn bị tài liệu in...", "info");

    this.hidePrintModal();

    // Add slight delay to show loading message
    setTimeout(() => {
      switch (printType) {
        case "quiz":
          this.printQuiz();
          break;
        case "result":
          this.printResult();
          break;
        case "answerkey":
          this.printAnswerKey();
          break;
        case "report":
          this.printReport();
          break;
        default:
          this.showTemporaryMessage("⚠️ Loại in không hợp lệ!", "error");
      }
    }, 500);
  }

  printQuiz() {
    if (!this.questions || this.questions.length === 0) {
      this.showTemporaryMessage(
        "⚠️ Vui lòng bắt đầu quiz trước khi in đề!",
        "warning"
      );
      return;
    }

    // Get subject-specific information
    const subjectName = this.currentConfig ? this.currentConfig.name : "Python Programming";
    let printTitle = "Đề Thi Trắc Nghiệm";
    
    if (subjectName === "Python Programming") {
      printTitle = "Đề Thi Trắc Nghiệm Python";
    } else if (subjectName === "Open Source Software") {
      printTitle = "Đề Thi Trắc Nghiệm Phần Mềm Nguồn Mở";
    }

    try {
      const printContent = this.generateQuizPrintContent();
      this.executePrint(printContent, printTitle);
      this.showTemporaryMessage(`✅ Đã gửi đề thi ${subjectName === "Python Programming" ? "Python" : "Phần Mềm Nguồn Mở"} đến máy in!`, "success");
    } catch (error) {
      console.error("Print error:", error);
      this.showTemporaryMessage("❌ Lỗi khi in đề thi!", "error");
    }
  }

  printResult() {
    if (
      !this.isQuizCompleted ||
      !this.questions ||
      this.questions.length === 0
    ) {
      this.showTemporaryMessage(
        "⚠️ Vui lòng hoàn thành quiz trước khi in kết quả!",
        "warning"
      );
      return;
    }

    // Get subject-specific information
    const subjectName = this.currentConfig ? this.currentConfig.name : "Python Programming";
    let printTitle = "Kết Quả Thi";
    
    if (subjectName === "Python Programming") {
      printTitle = "Kết Quả Thi Python";
    } else if (subjectName === "Open Source Software") {
      printTitle = "Kết Quả Thi Phần Mềm Nguồn Mở";
    }

    try {
      const printContent = this.generateResultPrintContent();
      this.executePrint(printContent, printTitle);
      this.showTemporaryMessage(`✅ Đã gửi kết quả thi ${subjectName === "Python Programming" ? "Python" : "Phần Mềm Nguồn Mở"} đến máy in!`, "success");
    } catch (error) {
      console.error("Print error:", error);
      this.showTemporaryMessage("❌ Lỗi khi in kết quả!", "error");
    }
  }

  printAnswerKey() {
    if (!this.questions || this.questions.length === 0) {
      this.showTemporaryMessage(
        "⚠️ Vui lòng bắt đầu quiz trước khi in đáp án!",
        "warning"
      );
      return;
    }

    // Get subject-specific information
    const subjectName = this.currentConfig ? this.currentConfig.name : "Python Programming";
    let printTitle = "Đáp Án Chuẩn";
    
    if (subjectName === "Python Programming") {
      printTitle = "Đáp Án Chuẩn Python";
    } else if (subjectName === "Open Source Software") {
      printTitle = "Đáp Án Chuẩn Phần Mềm Nguồn Mở";
    }

    try {
      const printContent = this.generateAnswerKeyPrintContent();
      this.executePrint(printContent, printTitle);
      this.showTemporaryMessage(
        `✅ Đã gửi đáp án chuẩn ${subjectName === "Python Programming" ? "Python" : "Phần Mềm Nguồn Mở"} đến máy in!`,
        "success"
      );
    } catch (error) {
      console.error("Print error:", error);
      this.showTemporaryMessage("❌ Lỗi khi in đáp án!", "error");
    }
  }

  printReport() {
    if (
      !this.isQuizCompleted ||
      !this.questions ||
      this.questions.length === 0
    ) {
      alert("⚠️ Vui lòng hoàn thành quiz trước khi in báo cáo!");
      return;
    }

    // Get subject-specific information
    const subjectName = this.currentConfig ? this.currentConfig.name : "Python Programming";
    let printTitle = "Báo Cáo Thống Kê";
    
    if (subjectName === "Python Programming") {
      printTitle = "Báo Cáo Thống Kê Python";
    } else if (subjectName === "Open Source Software") {
      printTitle = "Báo Cáo Thống Kê Phần Mềm Nguồn Mở";
    }

    const printContent = this.generateReportPrintContent();
    this.executePrint(printContent, printTitle);
  }

  generateQuizPrintContent() {
    // Get subject-specific information
    const subjectName = this.currentConfig ? this.currentConfig.name : "Python Programming";
    let examTitle = "BÀI THI TRẮC NGHIỆM";
    let examIcon = "📋";
    
    if (subjectName === "Python Programming") {
      examTitle = "BÀI THI TRẮC NGHIỆM PYTHON";
      examIcon = "🐍";
    } else if (subjectName === "Open Source Software") {
      examTitle = "BÀI THI TRẮC NGHIỆM PHẦN MỀM NGUỒN MỞ";
      examIcon = "📖";
    }

    let html = `
            <div class="print-content">
                <div class="print-header">
                    <h1>${examIcon} ${examTitle}</h1>
                    <div class="exam-info">
                        <p><strong>Thời gian:</strong> 60 phút | <strong>Số câu:</strong> ${
                          this.questions.length
                        }</p>
                        <p><strong>Họ tên:</strong> _________________________ | <strong>Lớp:</strong> _____________</p>
                        <p><strong>Ngày thi:</strong> ${new Date().toLocaleDateString(
                          "vi-VN"
                        )}</p>
                    </div>
                </div>
                <div class="print-instructions">
                    <h3>📝 HƯỚNG DẪN:</h3>
                    <ul>
                        <li>Đọc kỹ đề bài trước khi trả lời</li>
                        <li>Chọn đáp án đúng nhất bằng cách tô đen ô tương ứng</li>
                        <li>Mỗi câu chỉ chọn 1 đáp án</li>
                        <li>Không được sử dụng tài liệu</li>
                    </ul>
                </div>
                <div class="questions-list">
        `;

    this.questions.forEach((question, index) => {
      html += `
                <div class="question-item">
                    <div class="question-header">
                        <strong>Câu ${index + 1}:</strong> ${question.question}
                    </div>
                    <div class="options">
                        ${question.options
                          .map(
                            (option, optIndex) => `
                            <div class="option">
                                <span class="option-box">☐</span> ${option}
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `;
    });

    html += `
                </div>
                <div class="answer-sheet">
                    <h3>📋 BẢNG ĐÁNH DẤU ĐÁP ÁN</h3>
                    <div class="answer-grid">
        `;

    for (let i = 0; i < this.questions.length; i++) {
      html += `
                <div class="answer-row">
                    <span class="q-num">${i + 1}:</span>
                    <span class="options">
                        <span class="opt">Ⓐ</span>
                        <span class="opt">Ⓑ</span>
                        <span class="opt">Ⓒ</span>
                        <span class="opt">Ⓓ</span>
                    </span>
                </div>
            `;
    }

    html += `
                    </div>
                </div>
            </div>
        `;

    return html;
  }

  generateResultPrintContent() {
    const currentDate = new Date().toLocaleDateString("vi-VN");
    const timeSpent = this.formatTimeSpent();

    // Get subject-specific information
    const subjectName = this.currentConfig ? this.currentConfig.name : "Python Programming";
    let examTitle = "PHIẾU ĐIỂM THI TRẮC NGHIỆM";
    let examIcon = "🏆";
    
    if (subjectName === "Python Programming") {
      examTitle = "PHIẾU ĐIỂM THI TRẮC NGHIỆM PYTHON";
    } else if (subjectName === "Open Source Software") {
      examTitle = "PHIẾU ĐIỂM THI TRẮC NGHIỆM PHẦN MỀM NGUỒN MỞ";
    }

    return `
            <div class="print-content">
                <div class="print-header">
                    <h1>${examIcon} ${examTitle}</h1>
                    <div class="exam-info">
                        <p><strong>Ngày thi:</strong> ${currentDate}</p>
                        <p><strong>Thời gian làm bài:</strong> ${timeSpent}</p>
                    </div>
                </div>
                
                <div class="score-summary">
                    <div class="score-box">
                        <h2>📊 KẾT QUẢ TỔNG QUÁT</h2>
                        <div class="score-details">
                            <div class="score-item">
                                <span class="label">Tổng số câu:</span>
                                <span class="value">${
                                  this.questions.length
                                }</span>
                            </div>
                            <div class="score-item">
                                <span class="label">Số câu đúng:</span>
                                <span class="value correct">${
                                  this.correctCount
                                }</span>
                            </div>
                            <div class="score-item">
                                <span class="label">Số câu sai:</span>
                                <span class="value incorrect">${
                                  this.wrongCount
                                }</span>
                            </div>
                            <div class="score-item final">
                                <span class="label">Điểm số (thang 10):</span>
                                <span class="value">${this.score.toFixed(
                                  2
                                )}/10.00</span>
                            </div>
                            <div class="score-item final">
                                <span class="label">Phần trăm:</span>
                                <span class="value">${this.percentage}%</span>
                            </div>
                            <div class="score-item">
                                <span class="label">Quy đổi điểm:</span>
                                <span class="value">Mỗi câu đúng = 0.25 điểm</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="detailed-analysis">
                    <h3>📈 PHÂN TÍCH CHI TIẾT</h3>
                    ${this.generateDetailedAnalysis()}
                </div>
            </div>
        `;
  }

  generateAnswerKeyPrintContent() {
    // Get subject-specific information
    const subjectName = this.currentConfig ? this.currentConfig.name : "Python Programming";
    let examTitle = "ĐÁP ÁN CHUẨN - BÀI THI";
    
    if (subjectName === "Python Programming") {
      examTitle = "ĐÁP ÁN CHUẨN - BÀI THI PYTHON";
    } else if (subjectName === "Open Source Software") {
      examTitle = "ĐÁP ÁN CHUẨN - BÀI THI PHẦN MỀM NGUỒN MỞ";
    }

    return `
            <div class="print-content">
                <div class="print-header">
                    <h1>📚 ${examTitle}</h1>
                    <p><strong>Ngày in:</strong> ${new Date().toLocaleDateString(
                      "vi-VN"
                    )}</p>
                </div>
                
                <div class="answer-key-grid">
                    ${this.questions
                      .map(
                        (question, index) => `
                        <div class="answer-key-item">
                            <div class="question-number">Câu ${index + 1}</div>
                            <div class="correct-answer">${
                              question.options[question.correct]
                            }</div>
                            ${
                              question.explanation
                                ? `<div class="explanation">${question.explanation}</div>`
                                : ""
                            }
                        </div>
                    `
                      )
                      .join("")}
                </div>
                
                <div class="quick-reference">
                    <h3>🔍 BẢNG TRA CỨU NHANH</h3>
                    <div class="quick-answers">
                        ${this.questions
                          .map(
                            (question, index) => `
                            <span class="quick-item">
                                ${index + 1}: <strong>${String.fromCharCode(
                              65 + question.correct
                            )}</strong>
                            </span>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        `;
  }

  generateReportPrintContent() {
    return `
            <div class="print-content">
                <div class="print-header">
                    <h1>📊 BÁO CÁO THỐNG KÊ CHI TIẾT</h1>
                    <p><strong>Ngày tạo:</strong> ${new Date().toLocaleDateString(
                      "vi-VN"
                    )}</p>
                </div>
                
                <div class="statistics">
                    <h3>📈 THỐNG KÊ TỔNG QUAN</h3>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-label">Tổng điểm:</span>
                            <span class="stat-value">${this.score.toFixed(
                              2
                            )}/10.00</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Tỷ lệ đúng:</span>
                            <span class="stat-value">${this.percentage}%</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Thời gian:</span>
                            <span class="stat-value">${this.formatTimeSpent()}</span>
                        </div>
                    </div>
                </div>
                
                <div class="recommendations">
                    <h3>💡 GỢI Ý ÔN TẬP</h3>
                    ${this.generateStudyRecommendations()}
                </div>
            </div>
        `;
  }

  executePrint(content, title) {
    this.printArea.innerHTML = `
            <style>
                @media print {
                    body * { visibility: hidden; }
                    #printArea, #printArea * { visibility: visible; }
                    #printArea { position: absolute; left: 0; top: 0; width: 100%; }
                    
                    .print-content { font-family: 'Times New Roman', serif; line-height: 1.6; }
                    .print-header { text-align: center; border-bottom: 2px solid #1e40af; padding-bottom: 20px; margin-bottom: 20px; }
                    .print-header h1 { color: #1e40af; margin-bottom: 10px; }
                    .question-item { margin-bottom: 20px; page-break-inside: avoid; }
                    .options { margin-left: 20px; }
                    .option { margin: 5px 0; }
                    .option-box { display: inline-block; width: 15px; height: 15px; border: 1px solid #000; margin-right: 10px; }
                    .answer-sheet { margin-top: 30px; border-top: 1px solid #ccc; padding-top: 20px; }
                    .answer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
                    .answer-row { display: flex; align-items: center; margin: 5px 0; }
                    .q-num { font-weight: bold; margin-right: 10px; }
                    .opt { margin: 0 5px; border: 1px solid #000; padding: 2px 6px; }
                }
            </style>
            ${content}
        `;

    setTimeout(() => {
      window.print();
    }, 500);
  }

  formatTimeSpent() {
    const totalTime = 60 * 60; // 60 minutes
    const timeSpent = totalTime - this.timeRemaining;
    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;
    return `${minutes} phút ${seconds} giây`;
  }

  generateDetailedAnalysis() {
    let correctByChapter = {};
    let totalByChapter = {};

    this.questions.forEach((question, index) => {
      const isCorrect = this.userAnswers[index] === question.correct;
      const chapter = this.getQuestionChapter(question.id);

      if (!totalByChapter[chapter]) {
        totalByChapter[chapter] = 0;
        correctByChapter[chapter] = 0;
      }

      totalByChapter[chapter]++;
      if (isCorrect) correctByChapter[chapter]++;
    });

    let analysis = '<div class="chapter-analysis">';
    for (const chapter in totalByChapter) {
      const percentage = Math.round(
        (correctByChapter[chapter] / totalByChapter[chapter]) * 100
      );
      analysis += `
                <div class="chapter-item">
                    <span class="chapter-name">${chapter}:</span>
                    <span class="chapter-score">${correctByChapter[chapter]}/${totalByChapter[chapter]} (${percentage}%)</span>
                </div>
            `;
    }
    analysis += "</div>";

    return analysis;
  }

  getQuestionChapter(questionId) {
    if (questionId <= 20) return "Chương 1: Tổng quan Python";
    if (questionId <= 40) return "Chương 2: Lập trình căn bản";
    if (questionId <= 60) return "Chương 3: Hàm";
    if (questionId <= 80) return "Chương 4: OOP";
    if (questionId <= 100) return "Chương 5: Kiểu dữ liệu phức";
    return "Chương 6: Tập tin";
  }

  generateStudyRecommendations() {
    const wrongAnswers = this.questions.filter(
      (_, index) => this.userAnswers[index] !== this.questions[index].correct
    );

    if (wrongAnswers.length === 0) {
      return '<p class="excellent">🎉 Xuất sắc! Bạn đã trả lời đúng tất cả câu hỏi!</p>';
    }

    let recommendations = '<ul class="recommendations-list">';

    if (this.percentage < 60) {
      recommendations += "<li>📖 Cần ôn lại kiến thức cơ bản về Python</li>";
      recommendations += "<li>💻 Thực hành viết code nhiều hơn</li>";
    } else if (this.percentage < 80) {
      recommendations += "<li>🔍 Tập trung vào các chương còn yếu</li>";
      recommendations += "<li>📝 Làm thêm bài tập nâng cao</li>";
    } else {
      recommendations += "<li>⭐ Tiếp tục duy trì và nâng cao kiến thức</li>";
      recommendations += "<li>🚀 Thử thách bản thân với các dự án thực tế</li>";
    }

    recommendations += "</ul>";
    return recommendations;
  }
}

// Initialize the quiz application when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const quiz = new QuizApp();
});

// Utility functions
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

// Add some animation effects
function addFadeInEffect(element) {
  element.classList.add("fade-in");
  setTimeout(() => {
    element.classList.remove("fade-in");
  }, 300);
}

// Mobile Navigation Enhancement Methods
QuizApp.prototype.setupMobileNavigation = function () {
  // Only setup mobile navigation, don't show yet
  this.createMobileFloatingNav();
  this.createMobileStickyNumbers();
};

QuizApp.prototype.showMobileNavigation = function () {
  if (window.innerWidth <= 768) {
    const floatingNav = document.getElementById("mobileFloatingNav");
    const stickyNumbers = document.getElementById("mobileStickyNumbers");

    if (floatingNav) {
      floatingNav.style.display = "block";
      setTimeout(() => floatingNav.classList.add("show"), 100);
    }

    if (stickyNumbers) {
      stickyNumbers.style.display = "block";
      setTimeout(() => stickyNumbers.classList.add("show"), 200);
    }

    // Add class to body for bottom padding
    document.body.classList.add("quiz-active");
  }
};

QuizApp.prototype.hideMobileNavigation = function () {
  const floatingNav = document.getElementById("mobileFloatingNav");
  const stickyNumbers = document.getElementById("mobileStickyNumbers");

  if (floatingNav) {
    floatingNav.classList.remove("show");
    setTimeout(() => (floatingNav.style.display = "none"), 300);
  }

  if (stickyNumbers) {
    stickyNumbers.classList.remove("show");
    setTimeout(() => (stickyNumbers.style.display = "none"), 300);
  }

  // Remove class from body
  document.body.classList.remove("quiz-active");
};

QuizApp.prototype.createMobileFloatingNav = function () {
  // Check if already exists
  if (document.getElementById("mobileFloatingNav")) return;

  const floatingNav = document.createElement("div");
  floatingNav.id = "mobileFloatingNav";
  floatingNav.className = "mobile-floating-nav";
  floatingNav.innerHTML = `
        <div class="nav-buttons">
            <button class="nav-btn" id="mobilePrevBtn" title="Câu trước">
                ‹
            </button>
            <div class="question-counter" id="mobileQuestionCounter">
                1/40
            </div>
            <button class="nav-btn" id="mobileNextBtn" title="Câu tiếp">
                ›
            </button>
        </div>
    `;

  document.body.appendChild(floatingNav);

  // Add event listeners
  document.getElementById("mobilePrevBtn").addEventListener("click", () => {
    this.previousQuestion();
    this.showTemporaryMessage("← Câu trước", "info");
  });

  document.getElementById("mobileNextBtn").addEventListener("click", () => {
    this.nextQuestion();
    this.showTemporaryMessage("Câu tiếp →", "info");
  });
};

QuizApp.prototype.createMobileStickyNumbers = function () {
  // Check if already exists
  if (document.getElementById("mobileStickyNumbers")) return;

  const stickyNumbers = document.createElement("div");
  stickyNumbers.id = "mobileStickyNumbers";
  stickyNumbers.className = "mobile-sticky-numbers";
  stickyNumbers.innerHTML = `
        <div class="numbers-grid" id="mobileNumbersGrid">
            <!-- Numbers will be populated dynamically -->
        </div>
    `;

  document.body.appendChild(stickyNumbers);
};

QuizApp.prototype.updateMobileNavigation = function () {
  if (!this.isQuizStarted) return;

  // Update floating nav counter
  const counter = document.getElementById("mobileQuestionCounter");
  if (counter) {
    counter.textContent = `${this.currentQuestionIndex + 1}/${
      this.questions.length
    }`;
  }

  // Update navigation buttons state
  const prevBtn = document.getElementById("mobilePrevBtn");
  const nextBtn = document.getElementById("mobileNextBtn");

  if (prevBtn) {
    prevBtn.disabled = this.currentQuestionIndex === 0;
  }

  if (nextBtn) {
    nextBtn.disabled = this.currentQuestionIndex === this.questions.length - 1;
  }

  // Update sticky numbers
  this.updateMobileStickyNumbers();
};

QuizApp.prototype.updateMobileStickyNumbers = function () {
  const numbersGrid = document.getElementById("mobileNumbersGrid");
  if (!numbersGrid || !this.questions) return;

  numbersGrid.innerHTML = "";

  // Show current question ± 5 questions for performance
  const start = Math.max(0, this.currentQuestionIndex - 5);
  const end = Math.min(this.questions.length, this.currentQuestionIndex + 6);

  for (let i = start; i < end; i++) {
    const numberBtn = document.createElement("button");
    numberBtn.className = "mini-question-number";
    numberBtn.textContent = i + 1;

    if (i === this.currentQuestionIndex) {
      numberBtn.classList.add("current");
    } else if (this.userAnswers[i] !== -1) {
      numberBtn.classList.add("answered");
    }

    numberBtn.addEventListener("click", () => {
      this.goToQuestion(i);
      this.showTemporaryMessage(`Chuyển đến câu ${i + 1}`, "info");
    });

    numbersGrid.appendChild(numberBtn);
  }
};

QuizApp.prototype.setupSwipeGestures = function () {
  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;

  const quizScreen = document.getElementById("quizScreen");
  if (!quizScreen) return;

  quizScreen.addEventListener(
    "touchstart",
    (e) => {
      if (!this.isQuizStarted || this.isQuizCompleted) return;

      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    { passive: true }
  );

  quizScreen.addEventListener(
    "touchend",
    (e) => {
      if (!this.isQuizStarted || this.isQuizCompleted) return;

      endX = e.changedTouches[0].clientX;
      endY = e.changedTouches[0].clientY;

      this.handleSwipeGesture(startX, startY, endX, endY);
    },
    { passive: true }
  );
};

QuizApp.prototype.handleSwipeGesture = function (startX, startY, endX, endY) {
  const deltaX = endX - startX;
  const deltaY = endY - startY;
  const minSwipeDistance = 80; // Reduced for easier swiping

  // Check if it's a horizontal swipe and not a vertical scroll
  if (
    Math.abs(deltaX) > Math.abs(deltaY) &&
    Math.abs(deltaX) > minSwipeDistance
  ) {
    if (deltaX > 0) {
      // Swipe right - previous question
      if (this.currentQuestionIndex > 0) {
        this.previousQuestion();
        this.showTemporaryMessage("👈 Chuyển câu trước", "success");
      } else {
        this.showTemporaryMessage("⚠️ Đây là câu đầu tiên", "warning");
      }
    } else {
      // Swipe left - next question
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.nextQuestion();
        this.showTemporaryMessage("👉 Chuyển câu tiếp", "success");
      } else {
        this.showTemporaryMessage("⚠️ Đây là câu cuối cùng", "warning");
      }
    }
  }
};

// Override displayQuestion to ensure proper mobile layout
QuizApp.prototype.originalDisplayQuestion = QuizApp.prototype.displayQuestion;
QuizApp.prototype.displayQuestion = function () {
  this.originalDisplayQuestion();

  // Update mobile navigation
  if (window.innerWidth <= 768) {
    this.updateMobileNavigation();
    // Scroll to top on mobile after question change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

// Override startQuiz to initialize mobile navigation
QuizApp.prototype.originalStartQuiz = QuizApp.prototype.startQuiz;
QuizApp.prototype.startQuiz = function () {
  this.originalStartQuiz();

  // Add mobile class for styling and show navigation
  if (window.innerWidth <= 768) {
    document.body.classList.add("quiz-active");

    // Show mobile navigation
    setTimeout(() => {
      this.showMobileNavigation();
      this.updateMobileNavigation();
    }, 200);

    // Show mobile instructions on first start
    setTimeout(() => {
      this.showMobileInstructions();
    }, 500);
  }
};

// Override restartQuiz to clean up mobile state
QuizApp.prototype.originalRestartQuiz = QuizApp.prototype.restartQuiz;
QuizApp.prototype.restartQuiz = function () {
  this.hideMobileNavigation();
  document.body.classList.remove("quiz-active");
  this.originalRestartQuiz();
};

// Override showResults to clean up mobile state
QuizApp.prototype.originalShowResults = QuizApp.prototype.showResults;
QuizApp.prototype.showResults = function () {
  this.hideMobileNavigation();
  document.body.classList.remove("quiz-active");
  this.originalShowResults();
};

// Override confirmCancelQuiz to clean up mobile state
QuizApp.prototype.originalConfirmCancelQuiz =
  QuizApp.prototype.confirmCancelQuiz;
QuizApp.prototype.confirmCancelQuiz = function () {
  this.hideMobileNavigation();
  document.body.classList.remove("quiz-active");
  this.originalConfirmCancelQuiz();
};

// Override directCancelQuiz to clean up mobile state
QuizApp.prototype.originalDirectCancelQuiz = QuizApp.prototype.directCancelQuiz;
QuizApp.prototype.directCancelQuiz = function () {
  this.hideMobileNavigation();
  document.body.classList.remove("quiz-active");
  this.originalDirectCancelQuiz();
};

QuizApp.prototype.showMobileInstructions = function () {
  // Check if user has seen instructions before
  if (localStorage.getItem("mobileInstructionsShown")) return;

  const instructionModal = document.createElement("div");
  instructionModal.className =
    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
  instructionModal.innerHTML = `
        <div class="quiz-card p-6 max-w-sm mx-4">
            <div class="text-center">
                <div class="text-4xl mb-4">📱</div>
                <h3 class="text-xl font-bold text-blue-600 mb-4">Hướng dẫn Mobile</h3>
                <div class="text-left space-y-3 mb-6 text-sm">
                    <div class="flex items-center">
                        <span class="text-blue-500 mr-2">👉</span>
                        <span>Vuốt trái/phải để chuyển câu hỏi</span>
                    </div>
                    <div class="flex items-center">
                        <span class="text-green-500 mr-2">🔢</span>
                        <span>Số câu hỏi ở trên đầu trang</span>
                    </div>
                    <div class="flex items-center">
                        <span class="text-cyan-500 mr-2">🔄</span>
                        <span>Nút di chuyển ở dưới trang</span>
                    </div>
                    <div class="flex items-center">
                        <span class="text-orange-500 mr-2">⏱️</span>
                        <span>Đồng hồ và Nộp Bài ở trên</span>
                    </div>
                </div>
                <button class="btn btn-primary w-full" onclick="this.parentElement.parentElement.parentElement.remove(); localStorage.setItem('mobileInstructionsShown', 'true');">
                    ✓ Đã hiểu
                </button>
            </div>
        </div>
    `;

  document.body.appendChild(instructionModal);

  // Auto remove after 12 seconds
  setTimeout(() => {
    if (instructionModal.parentNode) {
      instructionModal.remove();
      localStorage.setItem("mobileInstructionsShown", "true");
    }
  }, 12000);
};

// Back to Top Button Functionality
QuizApp.prototype.setupBackToTopButton = function () {
  if (!this.backToTopBtn) return;

  // Click event to scroll to top
  this.backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Show temporary message
    this.showTemporaryMessage("↑ Đã về đầu trang", "success");
  });

  // Show/hide button based on scroll position
  let scrollTimer = null;

  window.addEventListener("scroll", () => {
    // Clear existing timer
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }

    // Throttle scroll events for better performance
    scrollTimer = setTimeout(() => {
      this.handleBackToTopVisibility();
    }, 100);
  });

  // Initial check
  this.handleBackToTopVisibility();
};

QuizApp.prototype.handleBackToTopVisibility = function () {
  if (!this.backToTopBtn) return;

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Show button when user has scrolled down more than 300px
  // or when they are near the bottom of the page
  const showThreshold = 300;
  const nearBottom = scrollTop + windowHeight >= documentHeight - 100;

  if (scrollTop > showThreshold || nearBottom) {
    this.backToTopBtn.classList.add("show");
  } else {
    this.backToTopBtn.classList.remove("show");
  }
};

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new QuizApp();
});
