let guest: string[] = ["Imtiaz", "Sajid", "Waseem", "Asif"];
console.log("Unfortunately, I can only invite two people for dinner.");

while (guest.length > 2)
{
  let removedguest = guest.pop();
  console.log(`Sorry ${removedguest} i can't invite you to dinner.`);
}
guest.forEach(guest => {
  console.log(`Dear ${guest}, you are still invited to dinner `);
});
guest.splice(0, guest.length);
console.log(guest);
