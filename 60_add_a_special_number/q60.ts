// user's profile information:

let userProfile =(function(){
let name ="Aqsa";// Users details:
let age = 25;
return {
    displayInfo:function (){
        console.log(`Name:${name}, Age : ${age}`);//Sharing of users details:
    }
};

})()

// Asking profile to tell us about user:
userProfile.displayInfo();