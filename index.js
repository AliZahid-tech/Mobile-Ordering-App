import menuArray from "/data.js";
// const addBtn = document.querySelectorAll(".add");
const orderSec = document.getElementById("cart-items");
let orderSecIsClosed = orderSec.classList.contains("hidden");
let cartArr = [];
document.addEventListener("click", function (e) {
  if (e.target.dataset.btn) {
    const id = Number(e.target.dataset.btn);
    console.log(id);
    renderOrderCart(id);
  }
});
let menuSec = document.getElementsByClassName("menu-data")[0];
function getMenuHtml() {
  let menuHtml = ``;
  menuArray.forEach(function (menuItem) {
    menuHtml += `
    <div class="menu">
        <p class="item-icon">${menuItem.emoji}</p>
        <div class="item-info">
          <p class="item-name">${menuItem.name}</p>
          <p class="item-ingr">${menuItem.ingredients}</p>
          <p>$<span class="item-price">${menuItem.price}</span></p>
        </div>
        <button class="add" data-btn ="${menuItem.id}" >+</button>
      </div>
    `;
  });
  menuSec.innerHTML = menuHtml;
}
getMenuHtml();
function renderOrderCart(btnId) {
  let total = 0;
  menuArray.forEach((item) => {
    if (item.id === btnId) {
      cartArr.push(item);
    }
  });
  orderSec.innerHTML = ``;
  cartArr.forEach((item) => {
    orderSec.innerHTML += `

      <section class="cart">
        <div class="cart-item">
          <div class="cart-item-info">
            <p class="cart-item-name">${item.name}</p>
            <p class="cart-item-remove">Remove</p>
          </div>
          <p>$ <span  class="cart-item-price">${item.price}</span></p>
        </div>
      </section>

    `;
  });
  total = cartArr.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  document.getElementById("total-price").textContent = total;
}
