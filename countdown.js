const targetDate = new Date('December 5, 2025 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown-section').innerHTML = `
            <h2>🎉 Турнир начался! 🎉</h2>
            <p>Сервер запущен! Подключайтесь и начинайте играть!</p>
            <a href="selectia.html" class="cta-button" style="margin-top: 2rem;">🚀 Установить сборку</a>
        `;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
