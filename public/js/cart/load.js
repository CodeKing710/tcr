async function load() {
  if(sessionName !== 'guest') {
    try {
      const userCart = await fetch(`${window.location.origin}/cart/${sessionName}/items`);
      const userJson = await userCart.json();
      if(items.length >= 1 && items[0] !== "") {
        sessionStorage.setItem('cart',userJson.items);
      }
    } catch (e) {console.log(e);}
  }
}

addDeps(false, load);