document.addEventListener("DOMContentLoaded", () => {
    const playBtn = document.getElementById("play-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const audioPlayer = document.getElementById("audio-player");
    const audioSource = document.getElementById("audio-source");
    const songElements = document.querySelectorAll(".song");

    let currentSongIndex = 0;
    let isPlaying = false;
    let songs = [];

    // Populate songs array from data attributes
    songElements.forEach((songElement, index) => {
        songs.push(songElement.getAttribute("data-song"));
        songElement.addEventListener("click", () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            audioPlayer.play();
            playBtn.innerHTML = "&#10074;&#10074;"; // Change button to pause icon
            isPlaying = true;
        });
    });

    // Load song by index
    function loadSong(index) {
        audioSource.setAttribute("src", songs[index]);
        audioPlayer.load();
    }

    // Play/Pause button functionality
    playBtn.addEventListener("click", () => {
        if (isPlaying) {
            audioPlayer.pause();
            playBtn.innerHTML = "&#9654;"; // Change to play icon
        } else {
            audioPlayer.play();
            playBtn.innerHTML = "&#10074;&#10074;"; // Change to pause icon
        }
        isPlaying = !isPlaying;
    });

    // Next song functionality
    nextBtn.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        audioPlayer.play();
        playBtn.innerHTML = "&#10074;&#10074;"; // Change to pause icon
        isPlaying = true;
    });

    // Previous song functionality
    prevBtn.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        audioPlayer.play();
        playBtn.innerHTML = "&#10074;&#10074;"; // Change to pause icon
        isPlaying = true;
    });
});

