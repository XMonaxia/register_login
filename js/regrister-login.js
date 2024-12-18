const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// tombol sign-up diklik
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  container.classList.remove("sign-in-mode");
});

// tombol sign-in diklik
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  container.classList.add("sign-in-mode");
});



 