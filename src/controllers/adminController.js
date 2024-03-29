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

let getIngredientsManagementPage = (request, response) => {
  return response.render("admin/layout.ejs", {
    title: "Quản lý nguyên liệu",
    mainInclude: "./ingredients.ejs",
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

module.exports = {
  getHomePage: getHomePage,
  getCategoriesManagementPage: getCategoriesManagementPage,
  getIngredientsManagementPage: getIngredientsManagementPage,
  getDishesManagementPage: getDishesManagementPage,
  getUsersManagementPage: getUsersManagementPage,
};
