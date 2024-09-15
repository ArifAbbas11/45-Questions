function make_album(artist: string ,title: string,tracks?: number) {
    let album = {artist,  title};
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album
}

console.log(make_album("Artist One", "the first album"));
console.log(make_album("Artis two", "the second album"));
console.log(make_album("Artist three", "the third Album", 12))