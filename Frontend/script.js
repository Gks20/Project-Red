function showAlert() {
  alert("This is your alert window!");
}
document.getElementById("alert-btn").addEventListener("click", showAlert);


function randomBackground() {
  const colors = ["red", "blue", "green", "yellow", "purple", "pink"];
  document.body.style.backgroundColor = 
    colors[Math.floor(Math.random() * colors.length)];
}


function randomMessage() {
  const messages = [
    "You win absolutely nothing!",
    "Surprise! It's another popup.",
    "Click again if you dare...",
    "Did you expect a prize?"
  ];
  document.getElementById("game-area").innerText =
    messages[Math.floor(Math.random() * messages.length)];
}
