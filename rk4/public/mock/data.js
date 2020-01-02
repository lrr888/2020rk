const Mock=require('mockjs')

const data=Mock.mock({
  'list|10':[
    {
      'id|+1':0,
      'name':'@cname',
      'img':'@image(100x100,@color)'
    }
  ]
})
module.exports=data.list
// console.log(data.list)