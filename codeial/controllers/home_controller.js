module.exports.home = function(req, res){
    //1. return res.end('<h1>Express is up for Codeial</h1>');
    console.log(req.cookies);
    res.cookie('name', 15);
    return res.render('home', {
        title : "home"
    });

}

// module.exports.actionName = fuction(){}