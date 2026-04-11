// Create floating hearts background
function createFloatingHearts() {
    const container = document.getElementById('heartCanvas');
    const heartSymbols = ['❤️', '💖', '💗', '💕', '🌸', '🌷', '✨', '💓'];
    for (let i = 0; i < 45; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.fontSize = `${0.8 + Math.random() * 1.2}rem`;
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${8 + Math.random() * 12}s`;
        heart.style.animationDelay = `${Math.random() * 15}s`;
        heart.style.opacity = 0.3 + Math.random() * 0.5;
        container.appendChild(heart);
    }
}

// ========== ANISA'S PICTURES - INSERT YOUR IMAGES HERE ==========
// INSTRUCTIONS: 
// 1. Add your photos of Anisa to the same folder as this script
// 2. Replace the placeholder filenames below with your actual image filenames
// 3. Supported formats: .jpg, .jpeg, .png, .gif, .webp
// 
// Example: "anisa_photo1.jpg", "anisa_smiling.png", "her_picture.webp"
// =================================================================

const anisaPictures = [
    // 👇👇👇 REPLACE THESE WITH YOUR ACTUAL IMAGE FILENAMES 👇👇👇
    "anee1.jpg",   // <-- Change this to your first photo of Anisa
    "anee2.jpg",   // <-- Change this to your second photo of Anisa
    "anee3.jpg",   // <-- Change this to your third photo of Anisa
    "anee4.jpg",   // <-- Change this to your fourth photo of Anisa
    "anee5.jpg"    // <-- Change this to your fifth photo of Anisa
    // 👆👆👆 ADD OR REMOVE LINES AS NEEDED 👆👆👆
    // You can add more by adding new lines like: "another_photo.jpg",
];

// Captions for each photo (optional, make it sweet)
const photoCaptions = [
    "💖 My beautiful Anisa 💖",
    "🌸 You light up my world 🌸",
    "💕 The most precious smile 💕",
    "✨ My heart belongs to you ✨",
    "🌹 Anisa, my everything 🌹"
];

// Render the photo gallery with embedded images
function renderGallery() {
    const gallery = document.getElementById('photoGallery');
    if (!gallery) return;
    
    if (anisaPictures.length === 0) {
        gallery.innerHTML = '<div class="empty-gallery-msg" style="text-align:center; padding:2rem; color:#c2829a;">✨ Anisa\'s beautiful pictures will appear here ✨</div>';
        return;
    }
    
    gallery.innerHTML = '';
    anisaPictures.forEach((imgSrc, index) => {
        // Use caption if available, otherwise default
        const caption = photoCaptions[index] || `💖 My beautiful Anisa 💖`;
        const photoCard = document.createElement('div');
        photoCard.className = 'photo-card';
        photoCard.innerHTML = `
            <img class="gallery-img" src="${imgSrc}" alt="Anisa's beautiful picture" onerror="this.src='https://placehold.co/400x400/ffe0e8/c45c7a?text=Anisa+❤️'">
            <div class="photo-caption">${caption}</div>
        `;
        gallery.appendChild(photoCard);
    });
}

// Reasons list (Muhammad's reasons to love Anisa)
let reasonsArray = [
    "💕 Your smile lights up my entire world",
    "🌼 Your kind heart and pure soul",
    "🎵 The sound of your laughter is my favorite melody",
    "🌟 Your strength and beautiful dreams",
    "🍰 The way you care about everyone around you",
    "📖 Your intelligence and grace",
    "☁️ How you make every day feel special",
    "💌 The way you love, so deeply and truly"
];

function renderReasons() {
    const container = document.getElementById('reasonsContainer');
    if (!container) return;
    container.innerHTML = '';
    reasonsArray.forEach(reason => {
        const badge = document.createElement('div');
        badge.className = 'reason-badge';
        badge.innerText = reason;
        container.appendChild(badge);
    });
}

function addNewReason() {
    const moreReasons = [
        "✨ The way you say my name, it melts my heart",
        "🌸 Your beautiful soul and gentle spirit",
        "💖 Your hugs that feel like coming home",
        "🌙 The way you dream without limits",
        "🍭 Your adorable little quirks I adore",
        "🎨 Your creativity and unique magic",
        "⭐ Every single thing about you, inside & out",
        "💞 The way you make me a better man every day",
        "🌟 Your resilience and beautiful strength",
        "💎 The way you are unapologetically YOU"
    ];
    const randomNew = moreReasons[Math.floor(Math.random() * moreReasons.length)];
    reasonsArray.push(randomNew);
    renderReasons();
    
    const btn = document.getElementById('addReasonBtn');
    btn.style.transform = 'scale(0.97)';
    setTimeout(() => { btn.style.transform = ''; }, 150);
}

// Whisper Wall messages (from Muhammad to Anisa)
const sweetMessages = [
    "💖 Anisa, you are the most beautiful woman in my universe. — Muhammad 💖",
    "🌸 Every time I see your picture, my heart skips a beat. I love you so much. 🌸",
    "💫 Your smile is my greatest treasure. Thank you for being mine. — Muhammad 💫",
    "🌙 Goodnight, my love. Dream of us, because I dream of you every night. 🌙",
    "🍰 You are the sweetest thing that has ever happened to me, Anisa. 🍰",
    "✨ Being loved by you is the greatest gift I've ever received. I love you. ✨",
    "💕 Muhammad's heart belongs only to Anisa, today and forever. 💕",
    "🌹 Anisa, meeting you was fate, loving you is my destiny. — Muhammad 🌹",
    "💗 You are my home, my peace, my everything. I love you beyond words. 💗"
];
let currentMessageIndex = 0;

function updateMessage() {
    const messageDiv = document.getElementById('dailyMessage');
    if (!messageDiv) return;
    let newIndex = (currentMessageIndex + 1) % sweetMessages.length;
    if (Math.random() > 0.6) {
        newIndex = Math.floor(Math.random() * sweetMessages.length);
    } else {
        newIndex = (currentMessageIndex + 1) % sweetMessages.length;
    }
    currentMessageIndex = newIndex;
    messageDiv.innerHTML = `“${sweetMessages[currentMessageIndex]}”`;
    messageDiv.style.transform = 'scale(1.02)';
    setTimeout(() => { messageDiv.style.transform = ''; }, 300);
}

// Heartbeat effect with floating hearts burst (Muhammad's love)
function createHeartBurst() {
    for (let i = 0; i < 22; i++) {
        const burstHeart = document.createElement('div');
        burstHeart.innerText = '❤️';
        burstHeart.style.position = 'fixed';
        burstHeart.style.left = `${50 + (Math.random() - 0.5) * 80}%`;
        burstHeart.style.bottom = '20%';
        burstHeart.style.fontSize = `${1 + Math.random() * 2}rem`;
        burstHeart.style.pointerEvents = 'none';
        burstHeart.style.zIndex = '999';
        burstHeart.style.opacity = '0.9';
        burstHeart.style.transition = 'transform 0.8s ease-out, opacity 1s';
        burstHeart.style.transform = 'translateY(0)';
        document.body.appendChild(burstHeart);
        requestAnimationFrame(() => {
            burstHeart.style.transform = `translateY(-${200 + Math.random() * 250}px) rotate(${Math.random() * 60 - 30}deg)`;
            burstHeart.style.opacity = '0';
        });
        setTimeout(() => { burstHeart.remove(); }, 1000);
    }
    
    const ringDiv = document.querySelector('.promise-ring h3');
    if (ringDiv) {
        const originalText = ringDiv.innerText;
        ringDiv.innerText = "💗 You own my heart, forever, Anisa! 💗";
        setTimeout(() => {
            ringDiv.innerText = originalText;
        }, 1800);
    }
}

// Rotating title animation
let titleStep = 0;
const loveTitles = ["💖 Anisa's Garden 💖", "🌹 Muhammad loves Anisa 🌹", "✨ Only Anisa ✨", "🌸 Anisa's Heart 🌸"];
function rotateTitle() {
    document.title = loveTitles[titleStep % loveTitles.length];
    titleStep++;
}
let titleInterval = setInterval(rotateTitle, 3500);

// Add romantic date to footer
function addDateToFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = today.toLocaleDateString(undefined, options);
        const dateSpan = document.createElement('div');
        dateSpan.style.marginTop = '12px';
        dateSpan.style.fontSize = '0.75rem';
        dateSpan.style.opacity = '0.85';
        dateSpan.innerHTML = `💞 Forever counting our love — Muhammad & Anisa, ${formattedDate} 💞`;
        footer.appendChild(dateSpan);
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    renderGallery();      // Render Anisa's pictures from the array
    renderReasons();
    addDateToFooter();
    
    // Event listeners
    const addBtn = document.getElementById('addReasonBtn');
    if (addBtn) addBtn.addEventListener('click', addNewReason);
    
    const msgBtn = document.getElementById('newMessageBtn');
    if (msgBtn) msgBtn.addEventListener('click', updateMessage);
    
    const heartBtn = document.getElementById('heartBeatBtn');
    if (heartBtn) heartBtn.addEventListener('click', createHeartBurst);
    
    // Sweet console message for Anisa
    console.log("%c✨ My dearest Anisa! ✨ This website was built with love by MUHAMMAD just for you. 💖", "color: #e68aac; font-size: 15px; font-family: monospace;");
    console.log("%cI love you more than all the stars in the sky. You are my everything.", "color: #ff9ebb; font-size: 13px;");
    
    // Welcome animation
    setTimeout(() => {
        const msgDiv = document.getElementById('dailyMessage');
        if (msgDiv) {
            msgDiv.style.transition = '0.3s';
            msgDiv.style.backgroundColor = '#fff0f5';
            setTimeout(() => { msgDiv.style.backgroundColor = ''; }, 600);
        }
    }, 300);
});