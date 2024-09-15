function make_shirt(size, message) {
    if (size === void 0) { size = "medium"; }
    if (message === void 0) { message = "I love type script"; }
    console.log("Making a ".concat(size, " t-shirt with the message of ").concat(message, " printed on it"));
}
;
make_shirt();
make_shirt("large");
make_shirt("small", "Dive in to code");
