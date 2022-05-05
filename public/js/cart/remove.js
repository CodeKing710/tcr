//NOTE: Removes all quantity of product contained in array
function remove(name) {
  const cart = sessionStorage.getItem('cart').split(',');
  for(const item of cart) {
    if(item === name) {
      cart.splice(cart.indexOf(name), 1);
    }
  }
  sessionStorage.setItem('cart', cart);
  // for(let i = 0; i < cart.length; i++) {
  //   if(cart[i] === name) {
  //   }
  // }

  const items = document.getElementsByClassName(name)[0];
  const [totalQty, totalPrice] = [document.getElementById('totalQty'), document.getElementById('totalPrice')];
  let qty = Number(items.children[1].textContent), price = Number(items.children[2].textContent.replace('$',''));
  let tQty = Number(totalQty.textContent), tPrice = Number(totalPrice.textContent.replace('$',''));
  tQty -= qty;
  tPrice -= price;
  totalQty.innerHTML = tQty;
  totalPrice.innerHTML = `\$${tPrice}`;
  items.remove();
  save();
}