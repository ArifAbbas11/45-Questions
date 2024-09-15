var guest = ["Imtiaz", "Sajid", "Waseem"];
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
var unableToAttaned = "Sajid";
console.log("".concat(unableToAttaned, " can't make ot to dinner"));
var newGest = "Shahid";
guest[guest.indexOf(unableToAttaned)] = newGest;
guest.forEach(function (guest) { console.log("Dear ".concat(guest, ", would you like to jion me for dinner")); });
