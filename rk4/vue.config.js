const datalist=require('./public/mock/data.js')
module.exports={
  lintOnSave:false,
  devServer:{
    before:function(app){
      app.get('/api/app',(req,res)=>{
        res.json({
          errCode:0,
          list:datalist
        })
      })
    }
  }
}