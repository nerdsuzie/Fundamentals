var express = require ("express") 
var randomID = require ("random-id")
var app = express()

app.get('/',function(req,res){
    var random = randomID(32,"0")
    res.send(random)
})
app.listen (3000)