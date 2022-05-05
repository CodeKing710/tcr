function openMobileNav() {
  document.getElementById('mobilePopup').style.display = 'block';
  document.getElementById('bars-link').href = 'javascript:closeMobileNav();';
}
function closeMobileNav() {
  document.getElementById('mobilePopup').style.display = 'none';
  document.getElementById('bars-link').href = 'javascript:openMobileNav();';
}
addDeps(true, () => {
  document.getElementById('mobilePopup').onmouseleave = closeMobileNav;
});