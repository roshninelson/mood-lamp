function changeMood(){

  const mood =
  document.getElementById("moodInput")
  .value
  .toLowerCase();

  const body =
  document.getElementById("body");

  const emoji =
  document.getElementById("emoji");

  const moodName =
  document.getElementById("moodName");

  const quote =
  document.getElementById("quote");

  // HAPPY
  if(mood.includes("happy")){

    body.style.background =
    "linear-gradient(to right,#facc15,#f97316)";

    emoji.innerText = "😄";

    moodName.innerText =
    "Golden Happy Aura";

    quote.innerText =
    "Your energy is shining brighter than the sun ☀️";
  }

  // SAD
  else if(mood.includes("sad")){

    body.style.background =
    "linear-gradient(to right,#1e3a8a,#38bdf8)";

    emoji.innerText = "💔";

    moodName.innerText =
    "Blue Emotional Aura";

    quote.innerText =
    "Even storms eventually run out of rain 🌧️";
  }

  // ANGRY
  else if(mood.includes("angry")){

    body.style.background =
    "linear-gradient(to right,#7f1d1d,#ef4444)";

    emoji.innerText = "😤";

    moodName.innerText =
    "Red Chaos Aura";

    quote.innerText =
    "Take a breath before you destroy the universe 🔥";
  }

  // CALM
  else if(mood.includes("calm")){

    body.style.background =
    "linear-gradient(to right,#065f46,#34d399)";

    emoji.innerText = "🌿";

    moodName.innerText =
    "Nature Calm Aura";

    quote.innerText =
    "Peace looks good on you 🍃";
  }

  // ROMANTIC
  else if(mood.includes("love")){

    body.style.background =
    "linear-gradient(to right,#be185d,#f472b6)";

    emoji.innerText = "❤️";

    moodName.innerText =
    "Pink Love Aura";

    quote.innerText =
    "Love makes everything glow brighter ✨";
  }

  // DEFAULT
  else{

    body.style.background =
    "#111827";

    emoji.innerText = "😶";

    moodName.innerText =
    "Unknown Aura";

    quote.innerText =
    "Your vibe is too powerful to detect 😭";
  }
}