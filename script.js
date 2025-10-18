let hobbies = document.querySelector(".test-user-hobbies-and-dislike-button");

let bio = document.querySelector(".test-user-bio");

let userHobbiesAndDislikesContainer = document.querySelector(
  ".test-user-hobbies-and-dislikes-container "
);

let currentTime = document.querySelector(".test-user-time");
currentTime.innerHTML = Date.now();

hobbies.addEventListener("click", (event) => {
  bio.style.display = bio.style.display === "none" ? "block" : "none";
  userHobbiesAndDislikesContainer.style.display =
    bio.style.display === "none" ? "flex" : "none";
});
