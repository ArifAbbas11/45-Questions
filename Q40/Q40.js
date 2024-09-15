function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "the first album"));
console.log(make_album("Artis two", "the second album"));
console.log(make_album("Artist three", "the third Album", 12));
