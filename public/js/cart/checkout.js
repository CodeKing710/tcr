function checkout() {
  if(sessionStorage.getItem('cart') === "") {
    alert('Cart Empty');
  } else {
    alert("Checkout Success");
  }
  sessionStorage.setItem('cart', []);
  save();
  window.location = window.location.origin;
}