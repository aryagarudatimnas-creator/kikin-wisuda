document.addEventListener("DOMContentLoaded", function() {
    const bgMusic = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");
    const musicIcon = document.getElementById("musicIcon");
    const scrollBtn = document.getElementById("scrollBtn");
    const confettiBtn = document.getElementById("confettiBtn");

    let isPlaying = false;

    function toggleMusic() {
        if (isPlaying) {
            bgMusic.pause();
            musicIcon.textContent = "🔇"; 
            musicToggle.classList.remove("playing"); 
        } else {
            bgMusic.play().catch(function(error) {
                console.log("Autoplay dicegah oleh browser.");
            });
            musicIcon.textContent = "🎵"; 
            musicToggle.classList.add("playing"); 
        }
        isPlaying = !isPlaying;
    }

    if (musicToggle) {
        musicToggle.addEventListener("click", toggleMusic);
    }

    if (scrollBtn) {
        scrollBtn.addEventListener("click", function() {
            if (!isPlaying) {
                toggleMusic();
            }
            document.getElementById("gallery").scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    if (confettiBtn) {
        confettiBtn.addEventListener("click", function() {
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#d4af37', '#ffffff', '#2c2c2c']
            });

            if (!isPlaying) {
                toggleMusic();
            }
        });
    }
});

if (confettiBtn) {
        confettiBtn.addEventListener("click", function() {
           
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#d4af37', '#ffffff', '#2c2c2c']
            });

         
            const titleName = document.getElementById("titleName");
            if (titleName) {
                titleName.textContent = "Kikin Sakinah, S.Pd.";
            }

            if (!isPlaying) {
                toggleMusic();
            }
        });
    }


if (confettiBtn) {
        confettiBtn.addEventListener("click", function() {
            // Memunculkan efek confetti
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#d4af37', '#ffffff', '#2c2c2c']
            });

   
            const titleName = document.getElementById("titleName");
            if (titleName) {
                titleName.textContent = "Kikin Sakinah, S.Pd.";
            }

            
            document.body.classList.remove("locked");

           
            document.getElementById("gallery").scrollIntoView({ 
                behavior: 'smooth' 
            });

            if (!isPlaying) {
                toggleMusic();
            }
        });
    }
