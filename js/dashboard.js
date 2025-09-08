// Dashboard functionality
class DashboardManager {
    constructor() {
        this.userStats = null;
        this.recentHistory = [];
        this.initializeDashboard();
    }

    initializeDashboard() {
        // Dashboard navigation buttons
        const dashboardToTopicsBtn = document.getElementById('dashboardToTopicsBtn');
        const dashboardLogoutBtn = document.getElementById('dashboardLogoutBtn');
        const viewAllHistoryBtn = document.getElementById('viewAllHistoryBtn');

        if (dashboardToTopicsBtn) {
            dashboardToTopicsBtn.addEventListener('click', () => {
                app.showScreen('topic');
            });
        }

        if (dashboardLogoutBtn) {
            dashboardLogoutBtn.addEventListener('click', () => {
                this.showLogoutConfirmation();
            });
        }

        if (viewAllHistoryBtn) {
            viewAllHistoryBtn.addEventListener('click', () => {
                this.showFullHistory();
            });
        }
    }

    async loadDashboardData(user) {
        if (!user) return;

        try {
            // Load user stats
            await this.loadUserStats(user.uid);
            
            // Load recent quiz history
            await this.loadRecentHistory(user.uid);
            
            // Update UI
            this.updateUserInfo(user);
            this.updateStatistics();
            this.updateTopicStats();
            this.renderRecentHistory();
            
        } catch (error) {
            console.error('Error loading dashboard data:', error);
        }
    }

    async loadUserStats(userId) {
        try {
            const statsRef = database.ref(`users/${userId}/stats`);
            const snapshot = await statsRef.once('value');
            
            if (snapshot.exists()) {
                this.userStats = snapshot.val();
            } else {
                // Initialize default stats
                this.userStats = {
                    totalQuizzes: 0,
                    averageScore: 0,
                    bestScore: 0,
                    totalStudyTime: 0,
                    topicStats: {
                        python: { quizzes: 0, average: 0, best: 0 },
                        opensource: { quizzes: 0, average: 0, best: 0 }
                    }
                };
            }
        } catch (error) {
            console.error('Error loading user stats:', error);
            this.userStats = {
                totalQuizzes: 0,
                averageScore: 0,
                bestScore: 0,
                totalStudyTime: 0,
                topicStats: {
                    python: { quizzes: 0, average: 0, best: 0 },
                    opensource: { quizzes: 0, average: 0, best: 0 }
                }
            };
        }
    }

    async loadRecentHistory(userId) {
        try {
            const historyRef = database.ref(`users/${userId}/quiz-history`)
                .orderByChild('endTime')
                .limitToLast(5);
            
            const snapshot = await historyRef.once('value');
            this.recentHistory = [];
            
            if (snapshot.exists()) {
                snapshot.forEach(child => {
                    this.recentHistory.unshift(child.val());
                });
            }
        } catch (error) {
            console.error('Error loading recent history:', error);
            this.recentHistory = [];
        }
    }

    updateUserInfo(user) {
        // Update user avatar
        const userAvatar = document.getElementById('userAvatar');
        if (user.photoURL) {
            userAvatar.innerHTML = `<img src="${user.photoURL}" alt="Avatar" class="w-full h-full rounded-full object-cover">`;
        } else {
            const initial = (user.displayName || user.email || 'U')[0].toUpperCase();
            userAvatar.textContent = initial;
        }

        // Update user name
        const dashboardUserName = document.getElementById('dashboardUserName');
        if (dashboardUserName) {
            dashboardUserName.textContent = user.displayName || user.email || 'Người dùng';
        }

        // Update user email
        const dashboardUserEmail = document.getElementById('dashboardUserEmail');
        if (dashboardUserEmail) {
            dashboardUserEmail.textContent = user.email || '';
        }

        // Update provider info
        const userProvider = document.getElementById('userProvider');
        if (userProvider) {
            const providerData = user.providerData[0];
            if (providerData) {
                const providerName = providerData.providerId === 'google.com' ? 'Google' : 'Email';
                userProvider.textContent = providerName;
                userProvider.className = providerData.providerId === 'google.com' 
                    ? 'text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full'
                    : 'text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full';
            }
        }

        // Update join date
        const userJoinDate = document.getElementById('userJoinDate');
        if (userJoinDate && user.metadata) {
            const joinDate = new Date(user.metadata.creationTime);
            userJoinDate.textContent = `Tham gia: ${joinDate.toLocaleDateString('vi-VN')}`;
        }
    }

    updateStatistics() {
        if (!this.userStats) return;

        // Total quizzes
        const totalQuizzes = document.getElementById('totalQuizzes');
        if (totalQuizzes) {
            totalQuizzes.textContent = this.userStats.totalQuizzes || 0;
        }

        // Average score
        const averageScore = document.getElementById('averageScore');
        if (averageScore) {
            averageScore.textContent = (this.userStats.averageScore || 0).toFixed(1);
        }

        // Best score
        const bestScore = document.getElementById('bestScore');
        if (bestScore) {
            bestScore.textContent = (this.userStats.bestScore || 0).toFixed(1);
        }

        // Study time
        const studyTime = document.getElementById('studyTime');
        if (studyTime) {
            const hours = Math.floor((this.userStats.totalStudyTime || 0) / 3600);
            studyTime.textContent = `${hours}h`;
        }
    }

    updateTopicStats() {
        if (!this.userStats || !this.userStats.topicStats) return;

        const { python = {}, opensource = {} } = this.userStats.topicStats;

        // Python stats
        const pythonQuizzes = document.getElementById('pythonQuizzes');
        const pythonAverage = document.getElementById('pythonAverage');
        const pythonBest = document.getElementById('pythonBest');

        if (pythonQuizzes) pythonQuizzes.textContent = python.quizzes || 0;
        if (pythonAverage) pythonAverage.textContent = (python.average || 0).toFixed(1);
        if (pythonBest) pythonBest.textContent = (python.best || 0).toFixed(1);

        // Open source stats
        const opensourceQuizzes = document.getElementById('opensourceQuizzes');
        const opensourceAverage = document.getElementById('opensourceAverage');
        const opensourceBest = document.getElementById('opensourceBest');

        if (opensourceQuizzes) opensourceQuizzes.textContent = opensource.quizzes || 0;
        if (opensourceAverage) opensourceAverage.textContent = (opensource.average || 0).toFixed(1);
        if (opensourceBest) opensourceBest.textContent = (opensource.best || 0).toFixed(1);
    }

    renderRecentHistory() {
        const container = document.getElementById('recentQuizHistory');
        if (!container) return;

        if (this.recentHistory.length === 0) {
            container.innerHTML = `
                <div class="text-center text-gray-500 py-8">
                    <span class="text-4xl mb-2 block">📝</span>
                    <p>Chưa có bài thi nào. Hãy bắt đầu thi để xem lịch sử!</p>
                </div>
            `;
            return;
        }

        const historyHTML = this.recentHistory.map(quiz => {
            const date = new Date(quiz.endTime).toLocaleDateString('vi-VN');
            const time = new Date(quiz.endTime).toLocaleTimeString('vi-VN', { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            
            const topicIcon = quiz.topic === 'python' ? '🐍' : '🌟';
            const topicName = quiz.topic === 'python' ? 'Python' : 'Open Source';
            const topicColor = quiz.topic === 'python' ? 'blue' : 'green';
            
            const scoreColor = quiz.score >= 8 ? 'green' : quiz.score >= 6 ? 'orange' : 'red';
            
            return `
                <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div class="flex items-center space-x-3">
                        <div class="text-2xl">${topicIcon}</div>
                        <div>
                            <h4 class="font-bold text-${topicColor}-800">${topicName}</h4>
                            <p class="text-sm text-gray-600">${date} lúc ${time}</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="font-bold text-${scoreColor}-600">${quiz.score.toFixed(1)}/10.0</p>
                        <p class="text-sm text-gray-600">${quiz.correctAnswers}/40 đúng</p>
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML = historyHTML;
    }

    showLogoutConfirmation() {
        if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
            app.logout();
        }
    }

    showFullHistory() {
        // TODO: Implement full history modal or page
        alert('Tính năng xem tất cả lịch sử sẽ được thêm trong phiên bản sau!');
    }

    // Method to update stats after completing a quiz
    async updateStatsAfterQuiz(userId, quizData) {
        try {
            const statsRef = database.ref(`users/${userId}/stats`);
            const currentStats = await statsRef.once('value');
            
            let stats = currentStats.exists() ? currentStats.val() : {
                totalQuizzes: 0,
                averageScore: 0,
                bestScore: 0,
                totalStudyTime: 0,
                topicStats: {
                    python: { quizzes: 0, average: 0, best: 0 },
                    opensource: { quizzes: 0, average: 0, best: 0 }
                }
            };

            // Update overall stats
            stats.totalQuizzes = (stats.totalQuizzes || 0) + 1;
            stats.bestScore = Math.max(stats.bestScore || 0, quizData.score);
            
            // Calculate new average
            const totalScore = (stats.averageScore || 0) * (stats.totalQuizzes - 1) + quizData.score;
            stats.averageScore = totalScore / stats.totalQuizzes;
            
            // Update study time (quiz duration)
            const duration = (quizData.endTime - quizData.startTime) / 1000; // seconds
            stats.totalStudyTime = (stats.totalStudyTime || 0) + duration;

            // Update topic-specific stats
            const topic = quizData.topic;
            if (!stats.topicStats[topic]) {
                stats.topicStats[topic] = { quizzes: 0, average: 0, best: 0 };
            }
            
            const topicStats = stats.topicStats[topic];
            topicStats.quizzes = (topicStats.quizzes || 0) + 1;
            topicStats.best = Math.max(topicStats.best || 0, quizData.score);
            
            const topicTotalScore = (topicStats.average || 0) * (topicStats.quizzes - 1) + quizData.score;
            topicStats.average = topicTotalScore / topicStats.quizzes;

            // Save updated stats
            await statsRef.set(stats);
            
            console.log('Stats updated successfully:', stats);
            
        } catch (error) {
            console.error('Error updating user stats:', error);
        }
    }
}

// Initialize dashboard manager
const dashboardManager = new DashboardManager();