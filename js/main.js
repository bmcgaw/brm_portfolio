// Toggle nav icon color
const icon = document.getElementsByClassName("navbar-toggler-icon")[0];

icon.addEventListener("click", () => {
  icon.classList.toggle("active-toggler-icon");
});

// Toggle dropdown visibility for top navbar
const navbar = document.querySelector("#navbarNav");

navbar.addEventListener("click", () => {
  const navActive = document.querySelector(".navbar-toggler-icon");

  navbar.classList.toggle("show");
  navActive.classList.remove("active-toggler-icon");
});

// Change color on vertical nav links when active
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(
  ".bi-house-door-fill,.bi-tools,.bi-folder-fill,.bi-globe,.bi-book-fill,.bi-envelope-fill"
);

function handleScroll() {
  const currentSection = Array.from(sections).find((section) => {
    const rect = section.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    );
  });

  navLinks.forEach((navLink) => {
    if (navLink.classList.contains(`${currentSection.id}`)) {
      navLink.classList.add("active-vertical-icon");
    } else {
      navLink.classList.remove("active-vertical-icon");
    }
  });
}

window.addEventListener("scroll", handleScroll);
