 const randomID = require ("random-id")
 
 generateID = () =>{
     let random = randomID(32,"0")
     console.log (random)

 }
 generateID ()
 returnID = () =>{
    let random = randomID(32,"0")
    return random

}
console.log (returnID())
// app.get('/',function(req,res){
//     var random = randomID(32,"0")
//     res.send(random)
// })
// app.listen (3000)