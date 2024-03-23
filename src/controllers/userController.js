let getHomepage = (request, response) => {
  return response.render("user/home.ejs");
};

module.exports = {
  getHomepage: getHomepage,
};
