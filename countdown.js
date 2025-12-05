// КМН - Таймер до турнира
const targetDate = new Date('December 5, 2025 13:55:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    // Расчет дней, часов, минут, секунд
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Обновление элементов на странице
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (daysElement) daysElement.textContent = String(days).padStart(2, '0');
    if (hoursElement) hoursElement.textContent = String(hours).padStart(2, '0');
    if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, '0');
    if (secondsElement) secondsElement.textContent = String(seconds).padStart(2, '0');
    
    // Если время вышло
    if (distance < 0) {
        clearInterval(countdownInterval);
        
        const countdownSection = document.querySelector('.countdown-section');
        if (countdownSection) {
            countdownSection.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <h2 style="color: #dc2626; font-size: 2.5rem; margin-bottom: 1rem;">🎉 ТУРНИР НАЧАЛСЯ! 🎉</h2>
                    <p style="color: #64748b; font-size: 1.2rem; margin-bottom: 2rem;">Сервер запущен! Подключайтесь!</p>
                    <a href="selectia.html" 
                       style="display: inline-block; background: #dc2626; color: white; padding: 1rem 2rem; 
                              text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 1.1rem;">
                        🚀 Установить сборку
                    </a>
                </div>
            `;
        }
        
        // Обновляем все элементы на странице если они есть
        const timeElements = document.querySelectorAll('.countdown-item');
        timeElements.forEach(element => {
            element.innerHTML = '<span style="color: #dc2626; font-size: 2rem;">🎮</span><small>Время началось!</small>';
        });
    }
}

// Запускаем таймер
let countdownInterval;

// Ждем загрузки DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();
    });
} else {
    countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Экспорт для использования в других файлах
window.KMNCountdown = {
    update: updateCountdown,
    stop: function() {
        clearInterval(countdownInterval);
    },
    getRemainingTime: function() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        return {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
            totalSeconds: Math.floor(distance / 1000)
        };
    }
};
