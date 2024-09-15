let guest: string[] = ["Imtiaz", "Sajid", "Waseem"];
guest.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

let unableToAttaned: string = "Sajid";
console.log(`${unableToAttaned} can't make ot to dinner`);

let newGest: string = "Shahid";
guest[guest.indexOf(unableToAttaned)] = newGest;
guest.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to jion me for dinner`);
});
