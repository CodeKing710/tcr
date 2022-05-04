function checkout() {
  alert("Checkout Success");
  window.location = window.location.origin;
  sessionStorage.setItem('cart', []);
}