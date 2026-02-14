const captions = [
  "Stackin' vibes, not drama 💸😎",
  "Drip too hard, don’t stand too close 🌊💧",
  "I talk slick, then moonwalk out the convo 🕶️🕺",
  "Feelin’ like a Friday verse on a Monday beat 🎶🔊",
  "Came from the bottom, now we global 🌍🚀",
  "No stylist, just vision 😤👟✨",
  "Posted up like a billboard, stayin’ loud 🗣️🚩",
  "Woke up legendary, slept on like a mixtape 🛌🔥",
  "Gold chains and bold moves 🏆💪",
  "Energy louder than the speakers 🔊⚡",
  "Mic check, I don’t need no filter 🎤📲",
  "Style cold like a late-night freestyle ❄️🎹",
  "I don't chase clout, I manifest crowns 👑✨",
  "Just a boss in chill mode 🤝🕺",
  "Catch me ridin’ through my dreams like it’s prime time 🏃‍♂️✨",
  "Ain’t a flex if it ain’t real 🙌💰",
  "Turned my hustle into a highlight reel 🎬👀",
  "Never late, I arrive like a beat drop ⏰🎵",
  "Cash rules, but peace is priceless 💸🙏",
  "I’m the vibe your playlist warned you about 🎶🔥"
  ];
  
  const btn = document.getElementById('captionBtn');
  const captionDisplay = document.getElementById('captionDisplay');
  const actionPrompt = document.getElementById('actionPrompt');
  
  btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * captions.length);
    captionDisplay.textContent = `"${captions[randomIndex]}"`;
    actionPrompt.style.display = 'block';
  });