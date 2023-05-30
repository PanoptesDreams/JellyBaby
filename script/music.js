// Music Player
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play-btn');
    const progress = document.getElementById('progress');
    const currentTime = document.getElementById('current-time');
    const duration = document.getElementById('duration');

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = '&#10074;&#10074;';
        } else {
            audio.pause();
            playBtn.innerHTML = '&#9658;';
        }
    });

    audio.addEventListener('timeupdate', () => {
        progress.value = (audio.currentTime / audio.duration) * 100;
        currentTime.textContent = formatTime(audio.currentTime);
        duration.textContent = formatTime(audio.duration);
    });

    progress.addEventListener('change', () => {
        audio.currentTime = (progress.value / 100) * audio.duration;
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Check if the music folder exists and get the list of music tracks
    fetch('/')
      .then(response => response.text())
      .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const links = [...doc.querySelectorAll('a')];
          const musicLinks = links.filter(link => link.href.match(/\.(mp3|wav)$/));
          const musicList = document.getElementById('music-list');
          musicLinks.forEach(link => {
              const track = document.createElement('div');
              track.className = "track-item";
              const trackLink = document.createElement('a');
              trackLink.className = "track-link";
              trackLink.textContent = link.textContent;
              trackLink.href = "/music/" + link.textContent;
              track.appendChild(trackLink);
              musicList.appendChild(track);
          });

          equalizeColumnHeights();

          // Handle playing music when a track is clicked
          const musicPlayer = document.getElementById('audio');
          musicList.addEventListener('click', event => {
              event.preventDefault();
              const target = event.target;
              if (target.tagName === 'A') {
                  musicPlayer.src = target.href;
                  musicPlayer.play();
              }
          });
      });
});