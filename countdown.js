const targetDate = new Date('December 5, 2025 00:00:00').getTime();
const videoOverlay = document.getElementById('video-overlay');
const startVideo = document.getElementById('start-video');
const closeVideo = document.getElementById('close-video');

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
        showVideo();
    }
}

function showVideo() {
    videoOverlay.classList.remove('hidden');
    startVideo.play().catch(e => console.log('Autoplay blocked:', e));
}

function hideVideo() {
    videoOverlay.classList.add('hidden');
    startVideo.pause();
    startVideo.currentTime = 0;
}

closeVideo.addEventListener('click', hideVideo);
videoOverlay.addEventListener('click', (e) => {
    if (e.target === videoOverlay) hideVideo();
});

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();