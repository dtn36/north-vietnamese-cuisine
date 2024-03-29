let getHomepage = (request, response) => {
  return response.render("admin/home.ejs");
};

let getLoginPage = (request, response) => {
  return response.render("admin/login.ejs");
};

module.exports = {
  getHomepage: getHomepage,
  getLoginPage: getLoginPage,
};
