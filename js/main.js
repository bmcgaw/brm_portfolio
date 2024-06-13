// Toggle nav icon color
const icon = document.getElementsByClassName("navbar-toggler-icon")[0];

icon.addEventListener("click", () => {
  icon.classList.toggle("active-icon");
});

// Slide in home page content
document.addEventListener("DOMContentLoaded", () => {
  const profileImage = document.querySelector(".profile-image");
  const homePageContent = document.querySelector(".home-content");

  homePageContent.classList.add("slide-in");
  profileImage.classList.add("slide-in");
});
