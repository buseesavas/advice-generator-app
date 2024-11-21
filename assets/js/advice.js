
let data = null;
const adviceText = document.querySelector(".adviceText");
const randomBtn = document.querySelector(".randomBtn");

function writeRandomAdvice() {
  adviceText.innerHTML = "";
  const index = Math.floor(Math.random() * 1454) + 1;
  const advice = data.quotes[index - 1].quote;
  for (const quote of data.quotes) {
    quote.id = index;
    adviceText.innerHTML = `
    <h3>ADVICE #${quote.id}</h3>
    <p>"${advice}"</p>
    `;
  }
}

async function init() {
  data = await fetch('https://dummyjson.com/quotes?limit=2000').then(response => response.json());
  writeRandomAdvice();
}

init();

randomBtn.addEventListener("click", writeRandomAdvice);

