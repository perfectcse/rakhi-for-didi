document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.image-box img');

  // Define messages for each image using data attributes or index
  const messages = [
    "To the best sister in the world – Happy Raksha Bandhan! 💖",
    "A brother is a friend God gave you – Happy Raksha Bandhan! 👫",
    "Tied together with love – Happy Rakhi! 🌸",
    "No matter the distance, you're always in my heart. 💌",
    "You are my forever secret keeper. 💬 Happy Raksha Bandhan!",
    "Here's to the bond that time only makes stronger. 🕰️",
    "Sending you virtual sweets and warm wishes. 🍬",
    "You're my partner in crime – and love. 😄 Happy Rakhi!",
    "Our bond is like a knot – unbreakable! 🧵",
    "From childhood fights to lifelong love – Happy Rakhi! 🧸",
    "You make life sweeter just by being in it. 🍭"
  ];

  images.forEach((img, index) => {
    img.addEventListener('click', function () {
      // Remove existing message box
      const existingBox = document.querySelector('.message-box');
      if (existingBox) existingBox.remove();

      // Create new message box
      const message = document.createElement('div');
      message.classList.add('message-box');
      message.innerHTML = `
        <p>${messages[index] || "Happy Raksha Bandhan!"}</p>
        <button class="close-btn">Close</button>
      `;

      document.body.appendChild(message);

      // Close handler
      message.querySelector('.close-btn').addEventListener('click', () => {
        message.remove();
      });
    });
  });
});
const musicButton = document.getElementById("toggle-music");
const backgroundAudio = document.getElementById("background-audio");

let isPlaying = true; // audio starts as autoplay

musicButton.addEventListener("click", () => {
  if (isPlaying) {
    backgroundAudio.pause();
    musicButton.textContent = "Turn On Music";
  } else {
    backgroundAudio.play();
    musicButton.textContent = "Turn Off Music";
  }
  isPlaying = !isPlaying;
});
