"use strict";
// user's profile information:
let userProfile = (function () {
    let name = "Aqsa";
    let age = 25;
    return {
        displayInfo: function () {
            console.log(`Name:${name}, Age : ${age}`);
        }
    };
})();
userProfile.displayInfo();
