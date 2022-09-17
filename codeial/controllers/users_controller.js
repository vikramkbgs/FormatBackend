module.exports.profile = function(req, res){
  //1. return res.end('<h1>Express is up for Codeial</h1>');

  return res.render("user_profile", {
    title: "profile"
  });
}
  //2. action render sign up page 
module.exports.signUp = function(req, res){
  return res.render('user_sign_up',{
    title:'Codeial | Sign up'
  });
}

//3. action render sign up page 
module.exports.signIn = function(req, res){
  return res.render('user_sign_in',{
    title:'Codeial | Sign in'
  });
}