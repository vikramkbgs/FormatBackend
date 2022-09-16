module.exports.profile = function(req, res){
  //1. return res.end('<h1>Express is up for Codeial</h1>');

  return res.render("user_profile", {
    title: "profile",
  });
}