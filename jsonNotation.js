var newObject = {
    me: {
        name:"Susan",
        city: "Hohenwald",
    }
   
}
console.log (newObject.me.name)

buildObject = (name,city,email) => {
    var user = {}
    console.log (user)
    console.log ("=====")
    user.name = name
    console.log (user)
    console.log ("=====")
    user.city = city
    console.log (user)
    console.log ("=====")
    user.email = email
    console.log (user)
    console.log ("=====")
}
buildObject ("susan","hohenwald","susan.parker@yahoo.com")