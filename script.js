// ==========================================
// SCROLL BUTTON LOGIC
// ==========================================
const scrollBtn = document.getElementById("scrollBtn");
const gallerySection = document.getElementById("gallery");

scrollBtn.addEventListener("click", () => {
    gallerySection.scrollIntoView({
        behavior: "smooth"
    });
});

// ==========================================
// CONFETTI ANIMATION LOGIC (NO LIBRARIES NEEDED)
// ==========================================
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];
let numberOfPieces = 100;
// Warna pastel elegan & emas
let colors = ['#d4af37', '#f4f1ea', '#ffb86c', '#2c2c2c', '#ffffff'];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createConfetti() {
    for (let i = 0; i < numberOfPieces; i++) {
        pieces.push({
            x: random(0, canvas.width),
            y: random(-canvas.height, 0),
            size: random(5, 12),
            color: colors[Math.floor(random(0, colors.length))],
            speed: random(1, 4),
            rotation: random(0, 360),
            rotationSpeed: random(-5, 5)
        });
    }
}

function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    pieces.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
        ctx.restore();
        
        p.y += p.speed;
        p.rotation += p.rotationSpeed;
        
        // Kalau sudah melewati batas bawah, kembalikan ke atas
        if (p.y > canvas.height) {
            p.y = random(-100, -10);
            p.x = random(0, canvas.width);
        }
    });
    
    requestAnimationFrame(updateConfetti);
}

// Menyesuaikan ukuran canvas kalau jendela browser diubah ukurannya
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Jalankan animasi
createConfetti();
updateConfetti();



document.addEventListener("DOMContentLoaded", function() {
    // Mengambil elemen dari HTML
    const bgMusic = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");
    const musicIcon = document.getElementById("musicIcon");
    const scrollBtn = document.getElementById("scrollBtn");

    let isPlaying = false;

    // Fungsi untuk menyalakan/mematikan musik
    function toggleMusic() {
        if (isPlaying) {
            bgMusic.pause();
            musicIcon.textContent = "🔇"; // Ikon saat musik mati
        } else {
            bgMusic.play().catch(function(error) {
                console.log("Autoplay dicegah oleh browser.");
            });
            musicIcon.textContent = "🎵"; // Ikon saat musik nyala
        }
        isPlaying = !isPlaying;
    }

    // 1. Menyalakan musik lewat tombol melayang (Music Toggle)
    musicToggle.addEventListener("click", toggleMusic);

    // 2. Menyalakan musik secara otomatis saat tombol "Buka Galeri" diklik
    // Ini trik jitu karena saat user klik tombol, browser sudah mengizinkan audio diputar
    scrollBtn.addEventListener("click", function() {
        // Nyalakan musik jika belum menyala
        if (!isPlaying) {
            toggleMusic();
        }
        
        // Efek scroll mulus ke bagian galeri
        document.getElementById("gallery").scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const bgMusic = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");
    const musicIcon = document.getElementById("musicIcon");
    const scrollBtn = document.getElementById("scrollBtn");

    let isPlaying = false; // Status awal lagu adalah mati

    // Fungsi saklar (Play / Pause)
    function toggleMusic() {
        if (isPlaying) {
            // MENGHENTIKAN LAGU (PAUSE)
            bgMusic.pause();
            musicIcon.textContent = "🔇"; 
            musicToggle.classList.remove("playing"); 
        } else {
            // MENYALAKAN LAGU (PLAY)
            bgMusic.play().catch(function(error) {
                console.log("Autoplay dicegah oleh browser.");
            });
            musicIcon.textContent = "🎵"; 
            musicToggle.classList.add("playing"); 
        }
        // Balikkan statusnya (dari mati jadi nyala, atau nyala jadi mati)
        isPlaying = !isPlaying;
    }

    // 1. Jika tombol musik di pojok kanan bawah diklik Kikin
    musicToggle.addEventListener("click", toggleMusic);

    // 2. Jika tombol "Buka Galeri" diklik Kikin
    scrollBtn.addEventListener("click", function() {
        // Kalau lagunya belum nyala, nyalakan otomatis
        if (!isPlaying) {
            toggleMusic();
        }
        
        // Geser layar ke bagian galeri (bawah) dengan mulus
        document.getElementById("gallery").scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});