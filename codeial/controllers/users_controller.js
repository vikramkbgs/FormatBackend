const User = require('../models/user');

module.exports.profile = function(req, res){
  //1. return res.end('<h1>Express is up for Codeial</h1>');

  //2. return res.render("user_profile", {
  //   title: "profile"
  // });

  if(req.cookies.user_id){
    User.findById(req.cookies.user_id, function(err, user){
      if(user){
        return res.render('user_profile', {
          title:"User Profile",
          user:user 
        })
      }
      return res.redirect('/users/sign-in');
    });
  }
  else{
    return res.redirect('/users/sign-in');
  } 
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

// 4. action get the sign up data
module.exports.create = function(req, res){
        if(req.body.password != req.body.confirm_password){
          return res.redirect('back');
        }

        User.findOne({email: req.body.email}, function(err, user){
          if(err){console.log('error in finding user in sign up'); return;}

          if(!user){
            User.create(req.body, function(err, user){
              if(err){console.log("error in creating user in sign up");return;}
              return res.redirect('/users/sign-in');
            });
          }else{
            return res.redirect('back');
          }
        });
}

// 5. action sign in and create session for the user
module.exports.createSession = function(req, res){
  // steps to authenticate
  //find the user
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding user in sign in");
      return;
    }

    //handle user found
    if (user) {
      //handle password which doesn't match
      if (user.password != req.body.password) return res.redirect("back");

      // handle session creation
      res.cookie("user_id", user.id);
      return res.redirect("/users/profile");
    } else {
      // handle user not found
      return res.redirect("back");
    }
  });
}