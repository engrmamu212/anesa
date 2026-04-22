// Music Control
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');

musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicBtn.innerText = "Pause Music";
    } else {
        music.pause();
        musicBtn.innerText = "Play Music";
    }
});

// Floating Hearts Background
function createHearts() {
    const container = document.getElementById('heartCanvas');
    const symbols = ['❤️', '🌸', '✨', '💕'];
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        heart.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (8 + Math.random() * 10) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
}

// Gallery Setup
const photos = ["anee1.jpg", "anee2.jpg", "anee3.jpg", "anee4.jpg"];
function renderPhotos() {
    const gallery = document.getElementById('photoGallery');
    photos.forEach(src => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.innerHTML = `<img class="gallery-img" src="${src}" onerror="this.src='https://placehold.co+❤️'">`;
        gallery.appendChild(card);
    });
}

window.onload = () => {
    createHearts();
    renderPhotos();
};
