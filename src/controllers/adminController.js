let getHomepage = (request, response) => {
  return response.render("admin/home.ejs");
};

module.exports = {
  getHomepage: getHomepage,
};
