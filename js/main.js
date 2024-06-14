// Toggle nav icon color
const icon = document.getElementsByClassName("navbar-toggler-icon")[0];

icon.addEventListener("click", () => {
  icon.classList.toggle("active-toggler-icon");
});

// Slide in home page content
document.addEventListener("DOMContentLoaded", () => {
  const profileImage = document.querySelector(".profile-image");
  const homePageContent = document.querySelector(".home-content");

  homePageContent.classList.add("slide-in");
  profileImage.classList.add("slide-in");
});

const navbar = document.querySelector("#navbarNav");

navbar.addEventListener("click", () => {
  const navActive = document.querySelector(".navbar-toggler-icon");

  navbar.classList.toggle("show");
  navActive.classList.remove("active-toggler-icon");
});
