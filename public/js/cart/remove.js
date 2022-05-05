//NOTE: Removes all quantity of product contained in array
function remove(name) {
  const cart = sessionStorage.getItem('cart').split(',');
  for(const item of cart) {
    if(item === name) {
      cart.splice(cart.indexOf(name), cart.indexOf(name)+1);
    }
  }
  sessionStorage.setItem('cart', cart);

  const items = document.getElementsByClassName(name);
  const [totalQty, totalPrice] = [document.getElementById('totalQty'), document.getElementById('totalPrice')];
  for(const item of items) {
    let qty = Number(item.children[1].textContent), price = Number(item.children[2].textContent.replace('$',''));
    let tQty = Number(totalQty.textContent), tPrice = Number(totalPrice.textContent.replace('$',''));
    tQty -= qty;
    tPrice -= price;
    totalQty.innerHTML = tQty;
    totalPrice.innerHTML = `\$${tPrice}`;
    item.remove();
  }
  save();
}