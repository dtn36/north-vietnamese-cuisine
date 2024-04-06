let getHomepage = (request, response) => {
  return response.render("users/layout.ejs", {
    title: "Trang chủ",
    mainInclude: "./home.ejs",
  });
};

let getLoginpage = (request, response) => {
  return response.render("users/login.ejs");
};

module.exports = {
  getHomepage: getHomepage,
  getLoginpage: getLoginpage,
};
