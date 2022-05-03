window.onmouseleave = function(e) {
  if(e.pageY - window.scrollTop() <= 1) {
    //Enact finalizations of data push
    //This is to prevent loss of cart upon page close or browser close
  }
}