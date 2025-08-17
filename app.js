class QuizApp {
    constructor() {
        this.currentQuizIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.answeredQuestions = [];
        this.incorrectQuestions = [];
        this.isReviewMode = false;
        this.reviewIndex = 0;
        this.quizMode = 'sequential'; // sequential, level, category, random
        this.selectedLevel = null;
        this.selectedCategory = null;
        this.filteredQuizzes = [];
        this.randomOrder = [];
        
        this.initializeElements();
        this.attachEventListeners();
        this.loadProgress();
        this.showMenu();
    }
    
    initializeElements() {
        this.questionTitle = document.getElementById('question-title');
        this.codeSnippet = document.getElementById('code-snippet');
        this.questionText = document.getElementById('question-text');
        this.optionsSection = document.querySelector('.options-section');
        this.feedbackSection = document.getElementById('feedback');
        this.feedbackMessage = document.getElementById('feedback-message');
        this.explanation = document.getElementById('explanation');
        this.nextBtn = document.getElementById('next-btn');
        this.resetBtn = document.getElementById('reset-btn');
        this.reviewBtn = document.getElementById('review-btn');
        this.skipBtn = document.getElementById('skip-btn');
        this.menuBtn = document.getElementById('menu-btn');
        
        this.currentLevel = document.getElementById('current-level');
        this.questionNumber = document.getElementById('question-number');
        this.correctCountEl = document.getElementById('correct-count');
        this.incorrectCountEl = document.getElementById('incorrect-count');
        
        this.beginnerProgress = document.getElementById('beginner-progress');
        this.intermediateProgress = document.getElementById('intermediate-progress');
        this.advancedProgress = document.getElementById('advanced-progress');
        this.beginnerScore = document.getElementById('beginner-score');
        this.intermediateScore = document.getElementById('intermediate-score');
        this.advancedScore = document.getElementById('advanced-score');
        
        // Menu elements
        this.menuScreen = document.getElementById('menu-screen');
        this.startSequentialBtn = document.getElementById('start-sequential');
        this.startByLevelBtn = document.getElementById('start-by-level');
        this.startByCategoryBtn = document.getElementById('start-by-category');
        this.startRandomBtn = document.getElementById('start-random');
        this.continueLearningBtn = document.getElementById('continue-learning');
        this.reviewMistakesBtn = document.getElementById('review-mistakes');
        
        this.levelSubmenu = document.getElementById('level-submenu');
        this.categorySubmenu = document.getElementById('category-submenu');
        this.backFromLevelBtn = document.getElementById('back-from-level');
        this.backFromCategoryBtn = document.getElementById('back-from-category');
        
        this.mistakeCountEl = document.getElementById('mistake-count');
        this.answeredCountEl = document.getElementById('answered-count');
        this.accuracyRateEl = document.getElementById('accuracy-rate');
        this.completionRateEl = document.getElementById('completion-rate');
    }
    
    attachEventListeners() {
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.resetBtn.addEventListener('click', () => this.resetQuiz());
        this.reviewBtn.addEventListener('click', () => this.startReviewMode());
        this.skipBtn.addEventListener('click', () => this.skipQuestion());
        this.menuBtn.addEventListener('click', () => this.showMenu());
        
        // Menu event listeners
        this.startSequentialBtn.addEventListener('click', () => this.startSequentialMode());
        this.startByLevelBtn.addEventListener('click', () => this.showLevelSubmenu());
        this.startByCategoryBtn.addEventListener('click', () => this.showCategorySubmenu());
        this.startRandomBtn.addEventListener('click', () => this.startRandomMode());
        this.continueLearningBtn.addEventListener('click', () => this.continueLearning());
        this.reviewMistakesBtn.addEventListener('click', () => this.startReviewMode());
        
        this.backFromLevelBtn.addEventListener('click', () => this.hideSubmenus());
        this.backFromCategoryBtn.addEventListener('click', () => this.hideSubmenus());
        
        // Level selection
        document.querySelectorAll('[data-level]').forEach(btn => {
            btn.addEventListener('click', (e) => this.startLevelMode(e.target.dataset.level));
        });
        
        // Category selection
        document.querySelectorAll('[data-category]').forEach(btn => {
            btn.addEventListener('click', (e) => this.startCategoryMode(e.target.dataset.category));
        });
    }
    
    loadProgress() {
        const saved = localStorage.getItem('railsQuizProgress');
        if (saved) {
            const data = JSON.parse(saved);
            this.currentQuizIndex = data.currentQuizIndex || 0;
            this.correctCount = data.correctCount || 0;
            this.incorrectCount = data.incorrectCount || 0;
            this.answeredQuestions = data.answeredQuestions || [];
            this.incorrectQuestions = data.incorrectQuestions || [];
        }
    }
    
    saveProgress() {
        const data = {
            currentQuizIndex: this.currentQuizIndex,
            correctCount: this.correctCount,
            incorrectCount: this.incorrectCount,
            answeredQuestions: this.answeredQuestions,
            incorrectQuestions: this.incorrectQuestions
        };
        localStorage.setItem('railsQuizProgress', JSON.stringify(data));
    }
    
    startQuiz() {
        this.displayQuestion();
        this.updateStats();
        this.updateProgressBars();
    }
    
    displayQuestion() {
        const quiz = this.getCurrentQuiz();
        if (!quiz) {
            this.showCompletion();
            return;
        }
        
        this.questionTitle.textContent = `問${quiz.id}. ${quiz.title}`;
        this.questionText.textContent = quiz.question;
        
        if (quiz.code) {
            this.codeSnippet.textContent = quiz.code;
            this.codeSnippet.parentElement.style.display = 'block';
        } else {
            this.codeSnippet.parentElement.style.display = 'none';
        }
        
        this.optionsSection.innerHTML = '';
        this.feedbackSection.style.display = 'none';
        
        switch (quiz.type) {
            case 'multiple-choice':
                this.displayMultipleChoice(quiz);
                break;
            case 'drag-drop':
                this.displayDragDrop(quiz);
                break;
            case 'code-completion':
                this.displayCodeCompletion(quiz);
                break;
        }
        
        this.updateLevel(quiz.level);
    }
    
    displayMultipleChoice(quiz) {
        quiz.options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.dataset.option = option.label;
            btn.innerHTML = `
                <span class="option-label">${option.label})</span>
                <span class="option-text">${option.text}</span>
            `;
            btn.addEventListener('click', () => this.handleMultipleChoiceAnswer(option, quiz));
            this.optionsSection.appendChild(btn);
        });
    }
    
    displayDragDrop(quiz) {
        const container = document.createElement('div');
        container.className = 'drag-drop-container';
        
        const sourceDiv = document.createElement('div');
        sourceDiv.className = 'drag-source';
        sourceDiv.innerHTML = '<h3>アイテム</h3>';
        
        quiz.items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'draggable-item';
            itemEl.textContent = item;
            itemEl.draggable = true;
            itemEl.addEventListener('dragstart', (e) => this.handleDragStart(e, item));
            sourceDiv.appendChild(itemEl);
        });
        
        const targetDiv = document.createElement('div');
        targetDiv.className = 'drop-target';
        targetDiv.innerHTML = '<h3>カテゴリ</h3>';
        
        Object.keys(quiz.categories).forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.innerHTML = `<h4>${category}</h4>`;
            
            const dropZone = document.createElement('div');
            dropZone.className = 'drop-zone';
            dropZone.dataset.category = category;
            dropZone.addEventListener('dragover', (e) => this.handleDragOver(e));
            dropZone.addEventListener('drop', (e) => this.handleDrop(e, quiz));
            dropZone.addEventListener('dragleave', (e) => this.handleDragLeave(e));
            
            categoryDiv.appendChild(dropZone);
            targetDiv.appendChild(categoryDiv);
        });
        
        container.appendChild(sourceDiv);
        container.appendChild(targetDiv);
        this.optionsSection.appendChild(container);
        
        const checkBtn = document.createElement('button');
        checkBtn.className = 'option-btn';
        checkBtn.textContent = '答えを確認';
        checkBtn.style.marginTop = '20px';
        checkBtn.addEventListener('click', () => this.checkDragDropAnswer(quiz));
        this.optionsSection.appendChild(checkBtn);
    }
    
    displayCodeCompletion(quiz) {
        const container = document.createElement('div');
        container.className = 'code-completion';
        
        const codeBlock = document.createElement('div');
        codeBlock.className = 'code-block';
        
        const pre = document.createElement('pre');
        const code = document.createElement('code');
        
        const parts = quiz.codeTemplate.split('____');
        const beforeText = document.createTextNode(parts[0]);
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'code-input';
        input.style.width = '150px';
        input.style.display = 'inline';
        input.placeholder = '...';
        
        const afterText = document.createTextNode(parts[1] || '');
        
        code.appendChild(beforeText);
        code.appendChild(input);
        code.appendChild(afterText);
        pre.appendChild(code);
        codeBlock.appendChild(pre);
        container.appendChild(codeBlock);
        
        const suggestions = document.createElement('div');
        suggestions.className = 'autocomplete-suggestions';
        suggestions.style.display = 'none';
        container.appendChild(suggestions);
        
        input.addEventListener('input', (e) => this.handleCodeInput(e, quiz, suggestions));
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.checkCodeCompletion(input.value, quiz);
            }
        });
        
        this.optionsSection.appendChild(container);
        
        const checkBtn = document.createElement('button');
        checkBtn.className = 'option-btn';
        checkBtn.textContent = '答えを確認';
        checkBtn.style.marginTop = '20px';
        checkBtn.addEventListener('click', () => this.checkCodeCompletion(input.value, quiz));
        this.optionsSection.appendChild(checkBtn);
    }
    
    handleMultipleChoiceAnswer(option, quiz) {
        const buttons = this.optionsSection.querySelectorAll('.option-btn');
        buttons.forEach(btn => {
            btn.classList.add('disabled');
            const optionData = quiz.options.find(o => o.label === btn.dataset.option);
            if (optionData) {
                if (optionData.correct) {
                    btn.classList.add('correct');
                } else if (btn.dataset.option === option.label) {
                    btn.classList.add('incorrect');
                }
            }
        });
        
        this.showFeedback(option.correct, quiz.explanation);
        this.updateAnswer(quiz.id, option.correct);
    }
    
    handleDragStart(e, item) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', item);
        e.target.classList.add('dragging');
    }
    
    handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        e.currentTarget.classList.add('drag-over');
    }
    
    handleDragLeave(e) {
        e.currentTarget.classList.remove('drag-over');
    }
    
    handleDrop(e, quiz) {
        e.preventDefault();
        const item = e.dataTransfer.getData('text/plain');
        const dropZone = e.currentTarget;
        
        const itemEl = document.createElement('div');
        itemEl.className = 'draggable-item';
        itemEl.textContent = item;
        itemEl.draggable = true;
        itemEl.addEventListener('dragstart', (e) => this.handleDragStart(e, item));
        
        dropZone.appendChild(itemEl);
        dropZone.classList.remove('drag-over');
        
        const draggingEl = document.querySelector('.dragging');
        if (draggingEl) {
            draggingEl.remove();
        }
    }
    
    checkDragDropAnswer(quiz) {
        let correct = true;
        const dropZones = document.querySelectorAll('.drop-zone');
        
        dropZones.forEach(zone => {
            const category = zone.dataset.category;
            const items = Array.from(zone.querySelectorAll('.draggable-item')).map(el => el.textContent);
            const expectedItems = quiz.categories[category];
            
            if (items.length !== expectedItems.length || !items.every(item => expectedItems.includes(item))) {
                correct = false;
                zone.style.backgroundColor = '#ffcccc';
            } else {
                zone.style.backgroundColor = '#ccffcc';
            }
        });
        
        this.showFeedback(correct, quiz.explanation);
        this.updateAnswer(quiz.id, correct);
    }
    
    handleCodeInput(e, quiz, suggestions) {
        const value = e.target.value;
        suggestions.innerHTML = '';
        
        if (value.length > 0 && quiz.hints) {
            const matchingHints = quiz.hints.filter(hint => hint.startsWith(value));
            if (matchingHints.length > 0) {
                suggestions.style.display = 'block';
                matchingHints.forEach(hint => {
                    const suggestionItem = document.createElement('div');
                    suggestionItem.className = 'suggestion-item';
                    suggestionItem.textContent = hint;
                    suggestionItem.addEventListener('click', () => {
                        e.target.value = quiz.answer;
                        suggestions.style.display = 'none';
                    });
                    suggestions.appendChild(suggestionItem);
                });
            } else {
                suggestions.style.display = 'none';
            }
        } else {
            suggestions.style.display = 'none';
        }
    }
    
    checkCodeCompletion(value, quiz) {
        const correct = value.trim().toLowerCase() === quiz.answer.toLowerCase();
        const input = document.querySelector('.code-input');
        
        if (correct) {
            input.style.backgroundColor = '#ccffcc';
        } else {
            input.style.backgroundColor = '#ffcccc';
        }
        
        this.showFeedback(correct, quiz.explanation);
        this.updateAnswer(quiz.id, correct);
    }
    
    showFeedback(correct, explanation) {
        this.feedbackSection.style.display = 'block';
        this.feedbackMessage.textContent = correct ? '正解です！' : '不正解です';
        this.feedbackMessage.className = correct ? 'correct' : 'incorrect';
        this.explanation.textContent = explanation;
    }
    
    updateAnswer(quizId, correct) {
        if (!this.answeredQuestions.includes(quizId)) {
            this.answeredQuestions.push(quizId);
            
            if (correct) {
                this.correctCount++;
            } else {
                this.incorrectCount++;
                if (!this.incorrectQuestions.includes(quizId)) {
                    this.incorrectQuestions.push(quizId);
                }
            }
            
            this.updateStats();
            this.updateProgressBars();
            this.saveProgress();
        }
    }
    
    getCurrentQuiz() {
        if (this.isReviewMode) {
            if (this.reviewIndex < this.incorrectQuestions.length) {
                return getQuizById(this.incorrectQuestions[this.reviewIndex]);
            }
            return null;
        }
        
        switch (this.quizMode) {
            case 'level':
            case 'category':
                if (this.currentQuizIndex < this.filteredQuizzes.length) {
                    return this.filteredQuizzes[this.currentQuizIndex];
                }
                break;
            case 'random':
                if (this.currentQuizIndex < this.randomOrder.length) {
                    return quizData[this.randomOrder[this.currentQuizIndex]];
                }
                break;
            case 'sequential':
            default:
                if (this.currentQuizIndex < quizData.length) {
                    return quizData[this.currentQuizIndex];
                }
                break;
        }
        return null;
    }
    
    nextQuestion() {
        if (this.isReviewMode) {
            this.reviewIndex++;
            if (this.reviewIndex >= this.incorrectQuestions.length) {
                this.isReviewMode = false;
                this.reviewIndex = 0;
                alert('復習が完了しました！');
            }
        } else {
            this.currentQuizIndex++;
        }
        
        this.displayQuestion();
        this.saveProgress();
    }
    
    skipQuestion() {
        this.nextQuestion();
    }
    
    resetQuiz() {
        if (confirm('本当に最初からやり直しますか？進行状況は失われます。')) {
            this.currentQuizIndex = 0;
            this.correctCount = 0;
            this.incorrectCount = 0;
            this.answeredQuestions = [];
            this.incorrectQuestions = [];
            this.isReviewMode = false;
            this.reviewIndex = 0;
            localStorage.removeItem('railsQuizProgress');
            this.startQuiz();
        }
    }
    
    startReviewMode() {
        if (this.incorrectQuestions.length === 0) {
            alert('間違えた問題がありません');
            return;
        }
        
        this.isReviewMode = true;
        this.reviewIndex = 0;
        this.displayQuestion();
    }
    
    updateStats() {
        this.correctCountEl.textContent = `正解: ${this.correctCount}`;
        this.incorrectCountEl.textContent = `不正解: ${this.incorrectCount}`;
        
        let totalQuestions;
        let currentQuestion;
        
        if (this.isReviewMode) {
            totalQuestions = this.incorrectQuestions.length;
            currentQuestion = this.reviewIndex + 1;
        } else {
            switch (this.quizMode) {
                case 'level':
                case 'category':
                    totalQuestions = this.filteredQuizzes.length;
                    currentQuestion = Math.min(this.currentQuizIndex + 1, totalQuestions);
                    break;
                case 'random':
                    totalQuestions = this.randomOrder.length;
                    currentQuestion = Math.min(this.currentQuizIndex + 1, totalQuestions);
                    break;
                case 'sequential':
                default:
                    totalQuestions = quizData.length;
                    currentQuestion = Math.min(this.currentQuizIndex + 1, totalQuestions);
                    break;
            }
        }
        
        this.questionNumber.textContent = `問題 ${currentQuestion} / ${totalQuestions}`;
        
        // Update menu statistics
        if (this.mistakeCountEl) {
            this.mistakeCountEl.textContent = this.incorrectQuestions.length;
        }
        if (this.answeredCountEl) {
            this.answeredCountEl.textContent = `${this.answeredQuestions.length}問`;
        }
        if (this.accuracyRateEl) {
            const total = this.correctCount + this.incorrectCount;
            const rate = total > 0 ? Math.round((this.correctCount / total) * 100) : 0;
            this.accuracyRateEl.textContent = `${rate}%`;
        }
        if (this.completionRateEl) {
            const rate = Math.round((this.answeredQuestions.length / quizData.length) * 100);
            this.completionRateEl.textContent = `${rate}%`;
        }
    }
    
    updateProgressBars() {
        const beginnerQuestions = quizData.filter(q => q.level === 'beginner');
        const intermediateQuestions = quizData.filter(q => q.level === 'intermediate');
        const advancedQuestions = quizData.filter(q => q.level === 'advanced');
        
        const beginnerAnswered = beginnerQuestions.filter(q => this.answeredQuestions.includes(q.id));
        const intermediateAnswered = intermediateQuestions.filter(q => this.answeredQuestions.includes(q.id));
        const advancedAnswered = advancedQuestions.filter(q => this.answeredQuestions.includes(q.id));
        
        const beginnerCorrect = beginnerAnswered.filter(q => !this.incorrectQuestions.includes(q.id)).length;
        const intermediateCorrect = intermediateAnswered.filter(q => !this.incorrectQuestions.includes(q.id)).length;
        const advancedCorrect = advancedAnswered.filter(q => !this.incorrectQuestions.includes(q.id)).length;
        
        this.beginnerProgress.style.width = `${(beginnerAnswered.length / beginnerQuestions.length) * 100}%`;
        this.intermediateProgress.style.width = `${(intermediateAnswered.length / intermediateQuestions.length) * 100}%`;
        this.advancedProgress.style.width = `${(advancedAnswered.length / advancedQuestions.length) * 100}%`;
        
        this.beginnerScore.textContent = `${beginnerCorrect}/${beginnerQuestions.length}`;
        this.intermediateScore.textContent = `${intermediateCorrect}/${intermediateQuestions.length}`;
        this.advancedScore.textContent = `${advancedCorrect}/${advancedQuestions.length}`;
    }
    
    updateLevel(level) {
        const levelText = {
            'beginner': '初級',
            'intermediate': '中級',
            'advanced': '上級'
        };
        this.currentLevel.textContent = levelText[level] || '初級';
    }
    
    showCompletion() {
        this.questionTitle.textContent = 'クイズ完了！';
        this.codeSnippet.parentElement.style.display = 'none';
        this.questionText.textContent = `お疲れ様でした！正解: ${this.correctCount}問 / 不正解: ${this.incorrectCount}問`;
        this.optionsSection.innerHTML = '';
        this.feedbackSection.style.display = 'none';
    }
    
    // Menu methods
    showMenu() {
        this.menuScreen.classList.remove('hidden');
        this.updateStats();
    }
    
    hideMenu() {
        this.menuScreen.classList.add('hidden');
    }
    
    showLevelSubmenu() {
        document.querySelector('.menu-options').style.display = 'none';
        this.levelSubmenu.style.display = 'block';
    }
    
    showCategorySubmenu() {
        document.querySelector('.menu-options').style.display = 'none';
        this.categorySubmenu.style.display = 'block';
    }
    
    hideSubmenus() {
        document.querySelector('.menu-options').style.display = 'grid';
        this.levelSubmenu.style.display = 'none';
        this.categorySubmenu.style.display = 'none';
    }
    
    startSequentialMode() {
        this.quizMode = 'sequential';
        this.currentQuizIndex = 0;
        this.isReviewMode = false;
        this.hideMenu();
        this.startQuiz();
    }
    
    startLevelMode(level) {
        this.quizMode = 'level';
        this.selectedLevel = level;
        this.filteredQuizzes = quizData.filter(q => q.level === level);
        this.currentQuizIndex = 0;
        this.isReviewMode = false;
        this.hideMenu();
        this.startQuiz();
    }
    
    startCategoryMode(category) {
        this.quizMode = 'category';
        this.selectedCategory = category;
        this.filteredQuizzes = this.getQuizzesByCategory(category);
        this.currentQuizIndex = 0;
        this.isReviewMode = false;
        this.hideMenu();
        this.startQuiz();
    }
    
    startRandomMode() {
        this.quizMode = 'random';
        this.randomOrder = this.shuffleArray([...Array(quizData.length).keys()]);
        this.currentQuizIndex = 0;
        this.isReviewMode = false;
        this.hideMenu();
        this.startQuiz();
    }
    
    continueLearning() {
        this.hideMenu();
        this.displayQuestion();
    }
    
    getQuizzesByCategory(category) {
        const categoryMap = {
            'routing': [3, 5, 6, 79],
            'activerecord': [4, 9, 11, 12, 13, 14, 28, 41, 42, 43, 44, 58, 59, 81, 82, 83, 85],
            'mvc': [2, 18, 29, 40],
            'testing': [40, 97],
            'security': [7, 49, 89],
            'performance': [13, 47, 70, 73, 88, 90, 100],
            'deployment': [47, 74, 86],
            'advanced': [21, 22, 23, 24, 25, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 72, 86, 87, 91, 92, 93, 94, 95, 96, 98, 99]
        };
        
        const quizIds = categoryMap[category] || [];
        return quizData.filter(q => quizIds.includes(q.id));
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});