// 游戏状态管理
class RebusPuzzleGame {
    constructor() {
        this.counter = 1;
        this.progressBar = document.getElementById('progressBar');
        this.counterDisplay = document.getElementById('counter');
        this.answerBox = document.getElementById('answerBox');
        this.puzzleImage = document.getElementById('puzzleImage');

        // 谜题数据
        this.puzzles = [
            {
                id: 1,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-1.webp",
                answer: "The Three Kings",
                hint: "",
            },
            {
                id: 2,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-2.webp",
                answer: "The Holly & The Ivy",
                hint: "",
            },
            {
                id: 3,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-3.webp",
                answer: "Bethlehem Down",
                hint: "",
            },
            {
                id: 4,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-4.webp",
                answer: "The First Noel",
                hint: "",
            },
            {
                id: 5,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-5.webp",
                answer: "Infant Holy, Infant Lowly",
                hint: "",
            },
            {
                id: 6,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-6.webp",
                answer: "Silver Bells",
                hint: "",
            },
            {
                id: 7,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-7.webp",
                answer: "White Christmas",
                hint: "",
            },
            {
                id: 8,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-8.webp",
                answer: "Rockin' Around the Christmas Tree",
                hint: "",
            },
            {
                id: 9,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-9.webp",
                answer: "All I Want For Christmas Is My Two Front Teeth",
                hint: "",
            },
            {
                id: 10,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-10.webp",
                answer: "Jingle Bell Rock",
                hint: "",
            },
            {
                id: 11,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-11.webp",
                answer: "2000 Miles",
                hint: "",
            },
            {
                id: 12,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-12.webp",
                answer: "Step into Christmas",
                hint: "",
            },
            {
                id: 13,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-13.webp",
                answer: "Snowman",
                hint: "",
            },
            {
                id: 14,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-14.webp",
                answer: "Mary's Boy Child",
                hint: "",
            },
            {
                id: 15,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-15.webp",
                answer: "Blue Christmas",
                hint: "",
            },
            {
                id: 16,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-16.webp",
                answer: "Happy Xmas (War Is Over)",
                hint: "",
            },
            {
                id: 17,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-17.webp",
                answer: "Last Christmas",
                hint: "",
            },
            {
                id: 18,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-18.webp",
                answer: "Underneath the Tree",
                hint: "",
            },
            {
                id: 19,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-19.webp",
                answer: "The Twelve Days of Christmas",
                hint: "",
            },
            {
                id: 20,
                imageUrl: "./christmas-rebus-puzzles/christmas-rebus-puzzle-20.webp",
                answer: "Little Donkey",
                hint: "",
            },
        ];

        this.currentPuzzleIndex = 9;
        this.timerInterval = null;
        this.answerShown = false;
        this.countdownTime = 10;

        this.init();
    }
    
    init() {
        // 为初始容器设置绝对定位
        const initialContainer = document.querySelector('.puzzle-image-container');
        if (initialContainer) {
            initialContainer.style.position = 'absolute';
        }

        // 10秒后显示答案
        setTimeout(() => {
            this.showAnswer();
        }, 10000);

        // 启动倒计时
        this.startTimer();

        // 添加点击事件（可选：点击图片或答案框切换到下一题）
        this.puzzleImage.addEventListener('click', () => this.nextPuzzle());
        this.answerBox.addEventListener('click', () => this.nextPuzzle());
    }
    
    showAnswer() {
        if (this.answerShown) return;

        this.answerShown = true;
        this.answerBox.classList.add('show');

        // 更新答案文本
        const currentPuzzle = this.puzzles[this.currentPuzzleIndex];
        document.getElementById('answerText').textContent = currentPuzzle.answer;

        // 3秒后隐藏答案并切换到下一题
        setTimeout(() => {
            this.autoNextPuzzle();
        }, 3000);
    }
    
    startTimer() {
        this.timerInterval = setInterval(() => {
            this.countdownTime--;

            if (this.countdownTime <= 0) {
                this.countdownTime = 0;
                clearInterval(this.timerInterval);
                // 时间到，可以添加游戏结束逻辑
            }

            this.updateCounterDisplay();
            this.updateProgressBar();
        }, 1000);
    }
    
    updateCounterDisplay() {
        this.counterDisplay.textContent = this.counter;
    }
    
    updateProgressBar() {
        // 总时间是10秒，计算进度百分比
        const totalTime = 10;
        const progress = (this.countdownTime / totalTime) * 100;
        this.progressBar.style.width = `${progress}%`;

        // 当进度低于20%时，改变颜色
        if (progress < 20) {
            this.progressBar.style.background = 'linear-gradient(90deg, #FF4500, #FF6347)';
        }
    }
    
    autoNextPuzzle() {
        // 切换到下一个谜题
        this.currentPuzzleIndex = (this.currentPuzzleIndex + 1) % this.puzzles.length;

        // 计数器加1并添加弹簧动画
        this.counter++;
        this.triggerCounterAnimation();

        // 隐藏答案
        this.answerBox.classList.remove('show');
        this.answerShown = false;

        // 图片切换动画
        this.transitionPuzzleImage();

        // 重置倒计时
        this.countdownTime = 10;
        clearInterval(this.timerInterval);
        this.startTimer();

        // 10秒后显示新答案
        setTimeout(() => {
            this.showAnswer();
        }, 10000);

        // 更新计数器显示
        this.updateCounterDisplay();
    }

    nextPuzzle() {
        // 手动切换到下一个谜题
        this.currentPuzzleIndex = (this.currentPuzzleIndex + 1) % this.puzzles.length;

        // 计数器加1并添加弹簧动画
        this.counter++;
        this.triggerCounterAnimation();

        // 隐藏答案
        this.answerBox.classList.remove('show');
        this.answerShown = false;

        // 图片切换动画
        this.transitionPuzzleImage();

        // 重置倒计时
        this.countdownTime = 10;
        clearInterval(this.timerInterval);
        this.startTimer();

        // 10秒后显示新答案
        setTimeout(() => {
            this.showAnswer();
        }, 10000);

        // 更新计数器显示
        this.updateCounterDisplay();
    }

    triggerCounterAnimation() {
        const counterCircle = document.querySelector('.counter-circle');
        counterCircle.classList.add('bounce');
        setTimeout(() => {
            counterCircle.classList.remove('bounce');
        }, 600);
    }

    transitionPuzzleImage() {
        const currentPuzzle = this.puzzles[this.currentPuzzleIndex];
        const container = document.querySelector('.puzzle-image-container');
        const puzzleSection = document.querySelector('.puzzle-section');

        // 旧容器消失
        container.classList.add('fade-out');

        // 创建新容器
        const newContainer = document.createElement('div');
        newContainer.className = 'puzzle-image-container slide-in-left';

        // 创建新图片
        const newImage = document.createElement('img');
        newImage.src = currentPuzzle.imageUrl;
        newImage.alt = 'Rebus Puzzle';
        newImage.className = 'puzzle-image';
        newImage.id = 'puzzleImage';

        // 添加点击事件
        newImage.addEventListener('click', () => this.nextPuzzle());

        newContainer.appendChild(newImage);

        // 添加新容器到页面
        puzzleSection.appendChild(newContainer);

        // 新容器滑入
        setTimeout(() => {
            newContainer.classList.add('active');
        }, 50);

        // 动画完成后移除旧容器
        setTimeout(() => {
            container.remove();
        }, 500);

        // 更新引用
        this.puzzleImage = newImage;
    }
    
    resetGame() {
        clearInterval(this.timerInterval);
        this.counter = 1;
        this.countdownTime = 10;
        this.currentPuzzleIndex = 0;
        this.answerShown = false;
        this.answerBox.classList.remove('show');

        // 重置显示
        this.updateCounterDisplay();
        this.updateProgressBar();

        // 恢复初始颜色
        this.progressBar.style.background = 'linear-gradient(90deg, #FFD700, #FFA500)';

        // 重新开始
        this.init();
    }
}

// 页面加载完成后初始化游戏
document.addEventListener('DOMContentLoaded', () => {
    window.game = new RebusPuzzleGame();
});

// 防止页面缩放（移动端优化）
document.addEventListener('gesturestart', (e) => {
    e.preventDefault();
});

// 添加触摸反馈
document.querySelectorAll('.puzzle-image, .answer-box').forEach(element => {
    element.addEventListener('touchstart', () => {
        element.style.transform = 'scale(0.98)';
    });
    
    element.addEventListener('touchend', () => {
        element.style.transform = 'scale(1)';
    });
});