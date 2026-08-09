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

            const titleName = document.getElementById("titleName");
            if (titleName) {
                titleName.textContent = "Kikin Sakinah, S.Pd.";
            }

            document.body.classList.remove("locked");

            if (!isPlaying) {
                toggleMusic();
            }
        });
    }
});

const pages = [
    "Kikin, tolong dibaca yaa!!",
    "Gua tau kin, kita baru kenal 1 sama lain dari sepupu gua.. bahkan kita ketemu aja belum WKWKWKWK",
    "Tapi, selamat yaaa kin! Meskipun kita belum kenal disaat lu lagi ngelewatin proses panjang skripsi dan lain lain yang pastinya bikin lu muak dan stress, ijinin gue buat ngasih apresiasi sebesar-besarnya ke lu karna lu udah hebat banget ngelewatin masa itu ^^",
    "I know this is a little bit cliche, but I wanna say \"i'm so proud of u\". Gua harap kita bisa ketemu dan berbagi cerita langsung tanpa chattingan lagi.",
    "Apapun mimpi dan tujuan yang mau lu raih, gua harap lu tau pasti bahwa lu bisa dapetin hal itu. Karna lu adalah kikin, gua percaya lu pasti bisa.",
    "Sehat selalu dan bahagia selalu yaa kin, gua harap kebahagiaan lu nantinya ada part dimana gua lah sumber kebahagiaan itu HAHAHAHAHAH just kidding <br><br><div class='bouquet-container'><img src='bunga.png' alt='Virtual Bouquet' class='bouquet-img'></div><br><strong>Once again, happy graduation kikin!!</strong><br><br><div class='signature-box'><img src='addit.png' alt='Arya' class='profile-mini'><span>- Arya Rachman Praditya</span></div>"
];

let currentPage = 0;

function updateBook() {
    const bookPage = document.getElementById("bookPage");
    const pageIndicator = document.getElementById("pageIndicator");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (bookPage) {
        bookPage.innerHTML = `<p>${pages[currentPage]}</p>`;
        pageIndicator.textContent = `${currentPage + 1} / ${pages.length}`;

        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === pages.length - 1;
    }
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updateBook();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updateBook();
    }
}
