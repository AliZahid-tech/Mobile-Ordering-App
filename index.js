import menuArray from "/data.js";
const addBtn = document.querySelectorAll(".add");
const orderSec = document.getElementById("your-order");
addBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    orderSec.classList.toggle("hidden");
  });
});
