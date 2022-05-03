//Only caches cart data locally
sessionStorage.setItem('cart', []);

function addtoCart(...items) {
  const temp = sessionStorage.getItem('cart').split(",");
  if(temp.length === 1 && temp[0] === "") {
    //Empty cart
    temp.pop();
  }
  for(const item of items) {
    temp.push(item);
  }
  sessionStorage.setItem('cart', temp);
}