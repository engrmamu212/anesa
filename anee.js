// Function to generate floating hearts
function createHearts() {
    const canvas = document.getElementById('heartCanvas');
    const hearts = ['❤️', '🌸', '✨', '💕'];
    const heart = document.createElement('div');
    
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '105vh';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    heart.style.opacity = Math.random();
    heart.style.zIndex = '-1';
    heart.style.transition = `transform ${Math.random() * 4 + 6}s linear, opacity 3s`;
    
    canvas.appendChild(heart);
    
    setTimeout(() => {
        heart.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = '0';
    }, 100);

    setTimeout(() => { heart.remove(); }, 10000);
}

// Gallery rendering
const images = ["anee1.jpg", "anee2.jpg", "anee3.jpg", "anee4.jpg"];
function loadGallery() {
    const container = document.getElementById('photoGallery');
    images.forEach(src => {
        const div = document.createElement('div');
        div.className = 'photo-card';
        div.innerHTML = `<img src="${src}" class="gallery-img" onerror="this.src='https://placehold.co+❤️'">`;
        container.appendChild(div);
    });
}

// Start animations
setInterval(createHearts, 2500);
window.onload = loadGallery;
