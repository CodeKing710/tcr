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
  for(const item of items) {
    item.remove();
  }
}