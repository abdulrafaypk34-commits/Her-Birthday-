// script.js - Interactive features and animations

// Countdown Timer
function startCountdown(endTime) {
    const countdownElement = document.getElementById('countdown');
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = 'Happy Birthday!';
            triggerConfetti();
        }
    }, 1000);
}

// Trigger confetti animation
function triggerConfetti() {
    const count = 200;
    const defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, min, max) {
        const particleCount = Math.floor(count * particleRatio);
        const elemental = []; // Store created confetti elements
        for (let i = 0; i < particleCount; i++) {
            elemental.push(confetti(Object.assign({}, defaults, {
                // Additional configurations
                angle: Math.random() * 360,
                spread: 70,
                startVelocity: 30,
                // Customize to include your own colors
                colors: ['#FFC700', '#FF5D00', '#FF00A1', '#00A1FF', '#00FFC1'],
                decay: 0.9,
                // Determine the horizontal and vertical positions
                scalar: (Math.random() < 0.5 ? 1 : 0.5),
                particleCount: Math.floor(Math.random() * (max - min + 1)) + min,
            })));
        }
        return elemental;
    }

    fire(0.25, 80, 160);
    fire(0.25, 80, 160);
    fire(0.25, 80, 160);
}

// Interactive Letters
function createInteractiveLetters() {
    const letters = document.querySelectorAll('.interactive-letter');
    letters.forEach(letter => {
        letter.addEventListener('mouseover', () => {
            letter.classList.add('bounce');
        });
        letter.addEventListener('mouseout', () => {
            letter.classList.remove('bounce');
        });
    });
}

window.onload = () => {
    const birthday = new Date('2026-02-08T00:00:00');
    startCountdown(birthday);
    createInteractiveLetters();
};
