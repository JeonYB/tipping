module.exports = function(app)
{
   /* 메인  */
   app.get('/',function(req,res){
      res.render('index.html')
   });

   /* 계정신청  */
   app.get('/account',function(req,res){
      res.render('account.html')
   });

   /* 내정보  */
   app.get('/mypage',function(req,res){
      res.render('mypage.html')
   });

   /*  정밀분석 메인 */
   app.get('/analysis',function(req,res){
      res.render('analysis.html')
   });
}