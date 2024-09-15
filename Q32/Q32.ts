let curentUser: string[] = ["user1" , "admin" , "user3" , "user4" , "user5"];
let newUser: string[] = ["User1" , "User6" , "user7" , "admin" , "User9"];

newUser.forEach(newUser => {
    if(curentUser.some(curentUser => curentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }else{
        console.log(`${newUser} is avalible.`);
    }
});