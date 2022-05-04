async function save(e) {
  //Enact finalizations of data push
  //This is to prevent loss of cart upon page close or browser close
  const cart = sessionStorage.getItem('cart').split(",");
  if(cart.length === 1 && cart[0] === "") {
    cart.pop();
  }
  const push = await fetch(`${window.location.origin}/cart/${sessionName}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({cart: cart})
  });
}

//Bind save options to multiple client exit routes
window.onblur = save;
window.onchange = save;
// window.onunload = save;
// window.onbeforeunload = save;