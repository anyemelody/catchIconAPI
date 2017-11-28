var express = require('express');//require the module
var app = express();
var server = app.listen(3000);
app.use(express.static('public'));


var NounProject = require('the-noun-project'),
nounProject = new NounProject({
    key: 'eab81cdcad5b43488000081008512040',
    secret: 'f90397b099564ea58ffb6bc7a6daf4a6'
});

console.log("server is running");



app.get('/',function(req,res){
    res.render('index.html');
})



app.get('/myaction',function(req,res){
    console.log('action!')
    nounProject.getIconsByTerm('goat', {limit: 5}, function (err, data) {
    if(err){
        var error = {
          status: "ERROR",
          message: err
        }
        return res.json(err)
      }

      var jsonData = {
        status: "OK",
        data: data
      }

      return res.json(jsonData);
    })
});