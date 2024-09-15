let userNames: string[] = ["admin" , "user1" , "user2" , "user3" , "user4"];

userNames.forEach(userNames => {
    if(userNames === "admin"){
        console.log("Hellow admin, would you like to see status report");
    } else {
        console.log(`Hellow ${userNames} thanks for logning in again`)    }
    
})