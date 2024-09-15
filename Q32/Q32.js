var curentUser = ["user1", "admin", "user3", "user4", "user5"];
var newUser = ["User1", "User6", "user7", "admin", "User9"];
newUser.forEach(function (newUser) {
    if (curentUser.some(function (curentUser) { return curentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is avalible."));
    }
});
