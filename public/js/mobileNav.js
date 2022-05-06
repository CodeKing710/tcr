function openMobileNav() {
  const popup = document.getElementById('mobilePopup');
  popup.style.display = 'block';
  setTimeout(()=>{popup.style.opacity = 1;}, 10);
  document.getElementById('bars-link').href = 'javascript:closeMobileNav();';
}
function closeMobileNav() {
  const popup = document.getElementById('mobilePopup');
  popup.style.opacity = 0;
  setTimeout(()=>{popup.style.display = 'none';}, 300);
  document.getElementById('bars-link').href = 'javascript:openMobileNav();';
}
addDeps(true, () => {
  document.getElementById('mobilePopup').onmouseleave = closeMobileNav;
});