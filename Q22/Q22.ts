let friends: string[] = ["Imtiaz", "Sajid", "Waseem","Asif"];


console.log(friends[4]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[5] = "Charlie"; // Correcting the error by accessing a valid index.