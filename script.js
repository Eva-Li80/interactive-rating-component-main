const ett = document.querySelector("#ett");
const tva = document.querySelector("#två");
const tre = document.querySelector("#tre");
const fyra = document.querySelector("#fyra");
const fem = document.querySelector("#fem");

const numbers = document.querySelectorAll(".all");
const selected = document.querySelector("#selected");

let selectedNumber = 1;

function updateSelected() {
  selected.innerHTML = `you selected ${selectedNumber} out of 5`;
}

numbers.forEach((number) => {
    number.addEventListener("click", function () {
      numbers.forEach((num) => {
        num.style.background = "hsl(216, 12%, 54%)";
      });
      number.style.background = "hsl(25, 97%, 53%)";
      selectedNumber = parseInt(number.innerHTML);
      updateSelected();
    });
  });

const button = document.querySelector("button");
const artEtt = document.querySelector("#art-ett");
const artTva = document.querySelector("#art-två");

button.addEventListener("click", function () {
    numbers.forEach((num) => {
        num.style.background = "hsl(216, 12%, 54%)";
    })
  artEtt.style.display = "none";
  artTva.style.display = "flex";
  
});

const closeArt = document.createElement("div");
closeArt.classList.add("close");
closeArt.innerHTML = "&times;";
artTva.appendChild(closeArt);

closeArt.addEventListener("click", function () {
  artEtt.style.display = "block";
  artTva.style.display = "none";
});
