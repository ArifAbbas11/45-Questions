var guest = ["Imtiaz", "Sajid", "Waseem", "Asif"];
console.log("Great news! I found a bigger dinner table");
guest.unshift("shahid");
guest.splice(guest.length / 2, 0, "wahid");
guest.push("Abid");
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, " would you like to join me for dinner."));
});
