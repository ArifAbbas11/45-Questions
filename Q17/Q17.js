var guest = ["Imtiaz", "Sajid", "Waseem", "Asif"];
console.log("Unfortunately, I can only invite two people for dinner.");
while (guest.length > 2) {
    var removedguest = guest.pop();
    console.log("Sorry ".concat(removedguest, " i can't invite you to dinner."));
}
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner "));
});
guest.splice(0, guest.length);
console.log(guest);
