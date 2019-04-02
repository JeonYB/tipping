module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });

     app.get('/account',function(req,res){
      res.render('account.html')
   });
}