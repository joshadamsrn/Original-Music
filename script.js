const tracks = [
  {
    title: "Fusion",
    artist: "Josh Adams - 1998",
    file: "audio/05 Fusion.m4a",
    cover: "images/music-cover.jpeg"
  },
  {
    title: "Dream Within Piano Solo",
    artist: "Josh Adams - 1995",
    file: "audio/Dream Within (Piano Solo).mp3",
    cover: "images/music-cover.jpeg"
  },
  {
    title: "Dream Within",
    artist: "Josh Adams - 1995",
    file: "audio/Dream Within.mp3",
    cover: "images/music-cover.jpeg"
  },
  {
    title: "Heavens Gate",
    artist: "Josh Adams - 1995",
    file: "audio/Heavens Gate.mp3",
    cover: "images/music-cover.jpeg"
  },
  {
    title: "Its All Good",
    artist: "Josh Adams - 1995",
    file: "audio/Its All Good.mp3",
    cover: "images/music-cover.jpeg"
  },
  {
    title: "Legend",
    artist: "Josh Adams - 1995",
    file: "audio/Legend.mp3",
    cover: "images/music-cover.jpeg"
  },
  {
    title: "Memories",
    artist: "Josh Adams - 1995",
    file: "audio/Memories.mp3",
    cover: "images/music-cover.jpeg"
  },
  {
    title: "Paradise",
    artist: "Josh Adams - 1995",
    file: "audio/Paradise.mp3",
    cover: "images/music-cover.jpeg"
  },
  {
    title: "Surrounding Love",
    artist: "Josh Adams - 1993",
    file: "audio/Surrounding Love.mp3",
    cover: "images/music-cover.jpeg"
  }
];

const audioPlayer = document.getElementById("audioPlayer");
const trackList = document.getElementById("trackList");
const trackTitle = document.getElementById("trackTitle");
const trackArtist = document.getElementById("trackArtist");
const coverArt = document.getElementById("coverArt");

function loadTrack(track, button) {
  audioPlayer.src = track.file;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  coverArt.src = track.cover;
  coverArt.alt = `${track.title} cover art`;

  document.querySelectorAll(".track-button").forEach(btn => btn.classList.remove("active"));
  if (button) button.classList.add("active");

  audioPlayer.play().catch(() => {
    // Browser may block autoplay until user interacts.
  });
}

tracks.forEach((track, index) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.className = "track-button";
  button.type = "button";
  button.innerHTML = `
    <span class="track-title">${track.title}</span>
    <span class="track-subtitle">${track.artist}</span>
  `;
  button.addEventListener("click", () => loadTrack(track, button));
  li.appendChild(button);
  trackList.appendChild(li);

  if (index === 0) {
    loadTrack(track, button);
  }
});
