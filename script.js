document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('bg-video');
    const muteBtn = document.getElementById('mute-btn');
    const icon = muteBtn.querySelector('i');

    // Try to play with sound first
    video.play().then(() => {
        video.muted = false;
        icon.classList.remove('fa-volume-xmark');
        icon.classList.add('fa-volume-high');
    }).catch(error => {
        video.muted = true;
        icon.classList.remove('fa-volume-high');
        icon.classList.add('fa-volume-xmark');
    });

    // Toggle Sound
    muteBtn.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            icon.classList.remove('fa-volume-xmark');
            icon.classList.add('fa-volume-high');
        } else {
            video.muted = true;
            icon.classList.remove('fa-volume-high');
            icon.classList.add('fa-volume-xmark');
        }
    });
});