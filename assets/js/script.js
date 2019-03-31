(function () {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('#' + burger.dataset.target);

  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    checkDevice(user);
  });
  let user = detect.parse(navigator.userAgent);
  function checkDevice(user) {
    let checkMenu = document.getElementById('navbarBurger');
    let checkActiveMenu = checkMenu.classList.contains('is-active');
    if (checkActiveMenu) {
      if (user.device.type == 'Tablet' || user.device.type == 'Mobile') {
        return document.documentElement.style.overflow = "hidden";
      }
    } else {
      return document.documentElement.style.overflow = "auto";
    }
  }
})();