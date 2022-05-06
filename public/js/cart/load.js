async function load() {
  if(sessionName !== 'guest') {
    try {
      const userCart = await fetch(`${window.location.origin}/cart/${sessionName}/items`);
      const userJson = await userCart.json();
      if(userJson.items.length >= 1 && userJson.items[0] !== "") {
        sessionStorage.setItem('cart',userJson.items);
      } else {
        sessionStorage.setItem('cart', []);
      }
    } catch (e) {console.log(e);}
  }
}

addDeps(false, load);