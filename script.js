const greetingElement = document.getElementById("greeting");
const changeColorBtn = document.getElementById("changeColorBtn");

changeColorBtn.addEventListener("click", () => {
  const colors = ["#ff6347", "#66bb6a", "#42a5f5", "#ffb74d", "#ab47bc"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

greetingElement.textContent = "Hello, dear visitor!";

