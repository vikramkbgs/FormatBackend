module.exports.home = function(req, res){
    //1. return res.end('<h1>Express is up for Codeial</h1>');

    return res.render('home', {
        title : "home"
    });

}

// module.exports.actionName = fuction(){}