let getHomePage = (request, response) => {
  return response.render("admin/layout.ejs", {
    title: "Trang quản trị",
    mainInclude: "./home.ejs",
  });
};

let getCategoriesManagementPage = (request, response) => {
  return response.render("admin/layout.ejs", {
    title: "Quản lý danh mục",
    mainInclude: "./categories.ejs",
  });
};

let getDishesManagementPage = (request, response) => {
  return response.render("admin/layout.ejs", {
    title: "Quản lý món ăn",
    mainInclude: "./dishes.ejs",
  });
};

let getUsersManagementPage = (request, response) => {
  return response.render("admin/layout.ejs", {
    title: "Quản lý người dùng",
    mainInclude: "./users.ejs",
  });
};

let getLoginPage = (request, response) => {
  return response.render("admin/login.ejs");
};

module.exports = {
  getHomePage: getHomePage,
  getCategoriesManagementPage: getCategoriesManagementPage,
  getDishesManagementPage: getDishesManagementPage,
  getUsersManagementPage: getUsersManagementPage,
  getLoginPage: getLoginPage,
};
