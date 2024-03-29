document.addEventListener("DOMContentLoaded", function () {
  var currentLocation = window.location.pathname; // Lấy đường dẫn hiện tại

  // Tìm phần tử li có href tương ứng với đường dẫn hiện tại và thêm lớp active
  var currentMenuItem = document.querySelector(
    'ul li a[href="' + currentLocation + '"]'
  ).parentElement;

  if (currentMenuItem) {
    currentMenuItem.classList.add("active");
  }
});
