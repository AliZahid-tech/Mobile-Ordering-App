import menuArray from "/data.js";
// const addBtn = document.querySelectorAll(".add");
const orderSec = document.getElementById("your-order");
let orderSecIsClosed = orderSec.classList.contains("hidden");
let cartArr = [];
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    const currItem = e.target.parentElement;
    handleAddToCart(cartArr, currItem);
  }
});
function handleAddToCart(cartArr, crrItem) {
  const product = {
    icon: crrItem.querySelector(".item-icon").textContent,
    name: crrItem.querySelector(".item-name").textContent,
    price: parseInt(crrItem.querySelector(".item-price").textContent),
    ingredients: crrItem.querySelector(".item-ingr").textContent,
  };
  if (orderSecIsClosed) {
    orderSec.classList.remove("hidden");
    orderSecIsClosed = false;
  }
  cartArr.push(product);
  console.log(cartArr);
}
// addBtn.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     orderSec.classList.toggle("hidden");
//   });
// });
