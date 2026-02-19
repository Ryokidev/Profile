document.addEventListener('click', () => {
    const audio = document.getElementById('bg-music');
    if (audio.paused) {
        audio.play().catch(error => console.log("Autoplay prevented:", error));
    }
}, { once: true });
