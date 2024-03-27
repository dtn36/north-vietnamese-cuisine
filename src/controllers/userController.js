let getHomepage = (request, response) => {
  return response.render("users/layout.ejs", {
    title: "Trang chủ",
    mainInclude: "./home.ejs",
  });
};

module.exports = {
  getHomepage: getHomepage,
};
