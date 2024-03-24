let getHomepage = (request, response) => {
  return response.render("user/layout.ejs", {
    title: "Trang chủ",
    mainInclude: "./home.ejs",
  });
};

module.exports = {
  getHomepage: getHomepage,
};
