console.log("hi")
let myExpress = require('express');
let meriApp= myExpress();
meriApp.use(myExpress.json());
let users = [];
  
 meriApp.put('/user-update',function(req, res){
    let userIndex= users.findIndex(user=>user.id == req.body.id);
    users[userIndex] = req.body;
    res.json({
        success:true
    })
 })
meriApp.delete('/user-delte',function(req,resp){
    users= users.filter(user=>user.id != req.query.anc)
    resp.json({success:true})
    console.log(req.query.anc);
 })
 meriApp.get('/abc',function(req,resp){
    resp.end("aresha")
    resp.json(users);
 })

 // res.end("hello")
//  let users = [
//         {
//             name:"ali"
//         },
//         {
//             name:"zuni"
//         },
//         {
//             name:"aiza"
//         }
//     ];

meriApp.post('/create', function(req, res){
    users.push(req.body)
    res.end("OK G")
});

 meriApp.get ('/m5',function(req,res){
        res.json(users)
})
meriApp.use(myExpress.static('/build'))
meriApp.listen(3004,function(){
    console.log("aresha");
})