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

   /*  정밀분석 depth2 */
   app.get('/analysis_list',function(req,res){
      res.render('analysis_list.html')
   });

   /*  정밀분석  Spotfire iFrame*/
   app.get('/spotfire',function(req,res){
      res.render('spotfire.html')
   });

   /*  정보사항 */
   app.get('/information',function(req,res){
      res.render('information.html')
   });

   /* 일반_고객센터 */
   app.get('/customer',function(req,res){
      res.render('customer.html')
   });

   /*  관리자_관련기사 등록 */
   app.get('/information_write',function(req,res){
      res.render('information_write.html')
   });

   /* 관리자_고객센터 */
   app.get('/customer_write',function(req,res){
      res.render('customer_write.html')
   });

   /*  관리자 */
   app.get('/admin',function(req,res){
      res.render('admin.html')
   });

     /*  관리자_ 등록 */
   app.get('/admin_write',function(req,res){
      res.render('admin_write.html')
   });
}