const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

function showForgotPasswordForm() {
  document.querySelector(".sign-in-form").style.display = "none";
  document.querySelector(".sign-up-form").style.display = "none";
  document.querySelector(".forgot-password-form").style.display = "block";
}

function showLoginForm() {
  document.querySelector(".sign-in-form").style.display = "block";
  document.querySelector(".sign-up-form").style.display = "none";
  document.querySelector(".forgot-password-form").style.display = "none";
}

function showSignUpForm() {
  document.querySelector(".sign-in-form").style.display = "none";
  document.querySelector(".sign-up-form").style.display = "block";
  document.querySelector(".forgot-password-form").style.display = "none";
}

function loginUser() {
  // Lấy thông tin đăng nhập từ người dùng
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  // Thực hiện kiểm tra đăng nhập và xác thực
  
  // Nếu đăng nhập thành công, chuyển hướng đến trang chủ
  window.location.href = "index.html";
}