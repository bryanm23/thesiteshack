(function () {
  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  window.addEventListener("scroll", function () {
    header.classList.toggle("header--scrolled", window.scrollY > 20);
  });

  menuToggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("nav--open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("nav--open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelector(".contact__form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks! We'll be in touch shortly with your free quote.");
    e.target.reset();
  });
})();
