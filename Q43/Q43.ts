let magicians1: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians1);

let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push[`${magician} the Great`];
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
