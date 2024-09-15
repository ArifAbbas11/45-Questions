function make_shirt(size: string = "medium", message: string = "I love type script") {
    console.log(`Making a ${size} t-shirt with the message of ${message} printed on it`);
};

make_shirt();
make_shirt("large");
make_shirt("small","Dive in to code");