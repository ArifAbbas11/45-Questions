var userNames = ["admin", "user1", "user2", "user3", "user4"];
userNames.forEach(function (userNames) {
    if (userNames === "admin") {
        console.log("Hellow admin, would you like to see status report");
    }
    else {
        console.log("Hellow ".concat(userNames, " thanks for logning in again"));
    }
});
