function breadcrumbs() {
  const url = window.location.pathname.slice(1,window.location.pathname.length-1);
  if(url) {
    //Generate Breadcrumbs
    const container = document.querySelector('section');
    const bcContainer = document.createElement('div');
    const paths = url.split('/');
    let bc = '/';
    bcContainer.innerHTML = `<a href="${bc}">Home</a>`;
    paths.forEach(path => {
      bc += `${path}/`;
      bcContainer.innerHTML += ` > <a href="${bc}">${path}`;
    });
    container.insertBefore(bcContainer ,container.children[0]);
  }
}

addDeps(true, breadcrumbs);