// アプリケーションの状態管理
const quizApp = {
    currentQuestion: 0,
    score: 0,
    answers: [],
    categoryScores: {}
};

// DOM要素の取得
const screens = {
    start: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen'),
    list: document.getElementById('list-screen')
};

const elements = {
    startBtn: document.getElementById('start-btn'),
    listBtn: document.getElementById('list-btn'),
    startFromListBtn: document.getElementById('start-from-list-btn'),
    nextBtn: document.getElementById('next-btn'),
    restartBtn: document.getElementById('restart-btn'),
    menuBtn: document.getElementById('menu-btn'),
    questionList: document.getElementById('question-list'),
    questionNumber: document.getElementById('question-number'),
    currentLevel: document.getElementById('current-level'),
    score: document.getElementById('score'),
    questionType: document.getElementById('question-type'),
    difficulty: document.getElementById('difficulty'),
    questionText: document.getElementById('question-text'),
    codeBlock: document.getElementById('code-block'),
    codeContent: document.getElementById('code-content'),
    options: document.getElementById('options'),
    feedback: document.getElementById('feedback'),
    feedbackContent: document.getElementById('feedback-content'),
    finalScore: document.getElementById('final-score'),
    categoryScores: document.getElementById('category-scores'),
    achievement: document.getElementById('achievement')
};

// クイズの初期化
function initQuiz() {
    quizApp.currentQuestion = 0;
    quizApp.score = 0;
    quizApp.answers = [];
    quizApp.categoryScores = {};
    
    showScreen('start');
}

// 画面切り替え
function showScreen(screenName) {
    Object.keys(screens).forEach(key => {
        screens[key].classList.remove('active');
    });
    screens[screenName].classList.add('active');
}

// クイズ開始
function startQuiz() {
    showScreen('quiz');
    loadQuestion();
}

// 選択肢をシャッフルする関数
function shuffleOptions(question) {
    // 各選択肢に元のインデックスを付与
    const optionsWithIndex = question.options.map((text, index) => ({
        text: text,
        originalIndex: index
    }));
    
    // Fisher-Yates シャッフルアルゴリズム
    const shuffled = [...optionsWithIndex];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
}

// 問題の読み込み
function loadQuestion() {
    const question = questions[quizApp.currentQuestion];
    
    // 進捗状況の更新
    elements.questionNumber.textContent = quizApp.currentQuestion + 1;
    elements.currentLevel.textContent = question.level;
    elements.score.textContent = quizApp.score;
    
    // 問題タイプと難易度の表示
    elements.questionType.textContent = question.code ? 'コード問題' : '選択問題';
    elements.difficulty.textContent = question.level;
    elements.difficulty.className = 'difficulty ' + question.level;
    
    // 問題文の表示
    elements.questionText.textContent = question.question;
    
    // コードブロックの表示/非表示
    if (question.code) {
        elements.codeBlock.style.display = 'block';
        elements.codeContent.textContent = question.code;
    } else {
        elements.codeBlock.style.display = 'none';
    }
    
    // 選択肢の表示
    displayOptions(question);
    
    // フィードバックを非表示
    elements.feedback.style.display = 'none';
}

// 選択肢の表示
function displayOptions(question) {
    elements.options.innerHTML = '';
    
    // 選択肢をシャッフル
    const shuffledOptions = shuffleOptions(question);
    
    shuffledOptions.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option.text;
        optionDiv.dataset.index = index;
        optionDiv.dataset.originalIndex = option.originalIndex;
        optionDiv.addEventListener('click', () => selectAnswer(option.originalIndex));
        elements.options.appendChild(optionDiv);
    });
}

// 回答の選択
function selectAnswer(originalIndex) {
    const question = questions[quizApp.currentQuestion];
    const isCorrect = originalIndex === question.correct;
    
    // 回答を記録
    quizApp.answers.push({
        questionId: question.id,
        selected: originalIndex,
        correct: question.correct,
        isCorrect: isCorrect
    });
    
    // カテゴリ別スコアの更新
    if (!quizApp.categoryScores[question.category]) {
        quizApp.categoryScores[question.category] = { correct: 0, total: 0 };
    }
    quizApp.categoryScores[question.category].total++;
    
    if (isCorrect) {
        quizApp.score++;
        quizApp.categoryScores[question.category].correct++;
    }
    
    // 選択肢のスタイル更新
    const options = document.querySelectorAll('.option');
    options.forEach((option) => {
        option.style.pointerEvents = 'none';
        const optionOriginalIndex = parseInt(option.dataset.originalIndex);
        if (optionOriginalIndex === originalIndex) {
            option.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        if (optionOriginalIndex === question.correct) {
            option.classList.add('correct');
        }
    });
    
    // フィードバックの表示
    showFeedback(isCorrect, question.explanation);
}

// フィードバックの表示
function showFeedback(isCorrect, explanation) {
    elements.feedback.style.display = 'block';
    elements.feedback.className = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');
    
    const message = isCorrect ? '🎉 正解！' : '❌ 不正解';
    elements.feedbackContent.innerHTML = `
        <strong>${message}</strong><br>
        ${explanation}
    `;
    
    // スコア更新
    elements.score.textContent = quizApp.score;
}

// 次の問題へ
function nextQuestion() {
    quizApp.currentQuestion++;
    
    if (quizApp.currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// 特定の問題へジャンプ
function jumpToQuestion(questionIndex) {
    quizApp.currentQuestion = questionIndex;
    showScreen('quiz');
    loadQuestion();
}

// TODO(human): スコア計算アルゴリズムの実装
function calculateFinalScore() {
    // ここにスコア計算ロジックを実装してください
    // 考慮事項：
    // - 難易度による重み付け（初級:1点、中級:2点、上級:3点）
    // - 連続正解ボーナス
    // - カテゴリバランスボーナス
    // 返り値: { finalScore: number, bonusPoints: number, grade: string }
}

// 結果画面の表示
function showResults() {
    showScreen('result');
    
    // 基本スコアの表示
    elements.finalScore.textContent = quizApp.score;
    
    // カテゴリ別スコアの表示
    displayCategoryScores();
    
    // 達成度の表示
    displayAchievement();
}

// カテゴリ別スコアの表示
function displayCategoryScores() {
    elements.categoryScores.innerHTML = '';
    
    Object.entries(quizApp.categoryScores).forEach(([category, scores]) => {
        const percentage = Math.round((scores.correct / scores.total) * 100);
        const scoreDiv = document.createElement('div');
        scoreDiv.className = 'category-score';
        scoreDiv.innerHTML = `
            <span>${category}</span>
            <span>${scores.correct}/${scores.total} (${percentage}%)</span>
        `;
        elements.categoryScores.appendChild(scoreDiv);
    });
}

// 達成度メッセージの表示
function displayAchievement() {
    const percentage = (quizApp.score / questions.length) * 100;
    let message = '';
    let className = '';
    
    if (percentage >= 90) {
        message = '🏆 Rails マスター！素晴らしい成績です！';
        className = 'gold';
    } else if (percentage >= 70) {
        message = '🥈 Rails エキスパート！よく頑張りました！';
        className = 'silver';
    } else if (percentage >= 50) {
        message = '🥉 Rails 中級者！基礎はしっかりしています！';
        className = 'bronze';
    } else {
        message = '📚 もう少し勉強が必要です。頑張って！';
        className = '';
    }
    
    elements.achievement.textContent = message;
    elements.achievement.className = 'achievement ' + className;
}

// クイズのリセット
function restartQuiz() {
    initQuiz();
    startQuiz();
}

// メニューに戻る
function returnToMenu() {
    // クイズ進行中の場合は確認
    if (screens.quiz.classList.contains('active') && quizApp.currentQuestion > 0) {
        const confirmReturn = confirm('クイズを中断してメニューに戻りますか？\n現在の進捗は失われます。');
        if (!confirmReturn) {
            return;
        }
    }
    
    // スタート画面に戻る
    initQuiz();
    showScreen('start');
}

// メニューボタンの表示/非表示
function updateMenuVisibility() {
    if (screens.start.classList.contains('active')) {
        elements.menuBtn.style.display = 'none';
    } else {
        elements.menuBtn.style.display = 'block';
    }
}

// 画面切り替え時にメニューボタンの表示を更新
const originalShowScreen = showScreen;
showScreen = function(screenName) {
    originalShowScreen(screenName);
    updateMenuVisibility();
};

// 問題リストの表示
function showQuestionList() {
    showScreen('list');
    renderQuestionList('all');
}

// 問題リストのレンダリング
function renderQuestionList(filter = 'all') {
    elements.questionList.innerHTML = '';
    
    questions.forEach((question, index) => {
        if (filter !== 'all' && question.level !== filter) {
            return;
        }
        
        const answered = quizApp.answers.find(a => a.questionId === question.id);
        const item = document.createElement('div');
        item.className = 'question-item';
        
        if (answered) {
            item.classList.add('answered');
            item.classList.add(answered.isCorrect ? 'correct' : 'incorrect');
        }
        
        item.innerHTML = `
            <div class="question-number-badge">${index + 1}</div>
            <div class="question-info">
                <div class="question-title">${question.question}</div>
                <div class="question-meta">
                    <span class="question-level ${question.level}">${question.level}</span>
                    <span class="question-category">${question.category}</span>
                </div>
            </div>
            <div class="question-status">
                ${answered ? (answered.isCorrect ? '✅' : '❌') : ''}
            </div>
        `;
        
        item.addEventListener('click', () => jumpToQuestion(index));
        elements.questionList.appendChild(item);
    });
}

// フィルターボタンの設定
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderQuestionList(btn.dataset.filter);
        });
    });
}

// イベントリスナーの設定
elements.startBtn.addEventListener('click', startQuiz);
elements.listBtn.addEventListener('click', showQuestionList);
elements.startFromListBtn.addEventListener('click', startQuiz);
elements.nextBtn.addEventListener('click', nextQuestion);
elements.restartBtn.addEventListener('click', restartQuiz);
elements.menuBtn.addEventListener('click', returnToMenu);

// フィルターボタンの初期化
setupFilterButtons();

// キーボードショートカット
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && elements.feedback.style.display === 'block') {
        nextQuestion();
    }
});

// 初期化
initQuiz();
updateMenuVisibility();