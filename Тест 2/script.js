// 1
const extractNumbers = (str) => {
  return str.match(/\d+/g)?.map(Number) || [];
};

console.log(extractNumbers("a1fg5hj6"));

// 2
 function fibonacci(prev = 0, curr = 1) {
   if (prev > 144) return;
   console.log(prev);
   setTimeout(() => fibonacci(curr, prev + curr), 1000); // Рекурсивный вызов с задержкой 1 секунда
 }

 fibonacci();

// 3

// 4
const container = document.getElementById("button-container");

container.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    document.body.style.backgroundColor = event.target.textContent;
  }
});

// 5

const toggleButton = document.getElementById("toggle-button");
const toggleBlock = document.getElementById("toggle-block");

toggleButton.addEventListener("click", () => {
  if (toggleBlock.style.display === "none") {
    toggleBlock.style.display = "block";
    toggleButton.textContent = "Скрыть блок";
  } else {
    toggleBlock.style.display = "none";
    toggleButton.textContent = "Показать блок";
  }
});

// 6

const counter = document.querySelector(".counter");
let count = 0;

const interval = setInterval(() => {
  counter.textContent = count;
  count++;
  if (count > 100) {
    clearInterval(interval);
  }
}, 10);
