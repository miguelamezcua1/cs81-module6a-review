// GitHub Repo: https://github.com/miguelamezcua1/cs81-module6a-review

// Constructor function to create a Playlist object
function Playlist(name) {
  this.name = name; // name of the playlist
  this.songs = []; // array to store song titles
  this.currentSong = null; // keeps track of the currently playing song
}

// Adds a song title to the playlist
Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle); // push adds it to the end of the songs array
};

// Plays the first song in the playlist
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0]; // sets currentSong to the first one
    console.log("Now playing:", this.currentSong);
  }
};

// Skips the current song and plays the next one
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift(); // removes the first song
    this.currentSong = this.songs[0]; // updates currentSong to the new first song
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip."); // if there's 0 or 1 song left
  }
};

// Lists all songs currently in the playlist
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", ")); // joins songs with commas
};

//  Suggested improvement 
// The skipSong() method could be improved to auto-play the next song even if there's only one left,
// or to allow skipping to a specific index instead of always shifting from the front.

//  New method added 
// Removes a specific song by name
Playlist.prototype.removeSong = function(songTitle) {
  const index = this.songs.indexOf(songTitle);
  if (index !== -1) {
    this.songs.splice(index, 1); // remove song if found
    console.log(`Removed song: ${songTitle}`);
  } else {
    console.log(`Song not found: ${songTitle}`);
  }
};

//  Simulation / Test 

let myMix = new Playlist("My Chill Mix");

myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.addSong("Late Night Coding");

myMix.playFirst();         // Play first song
myMix.skipSong();          // Skip to next
myMix.removeSong("Evening Jazz"); // Remove a specific song
myMix.listSongs();         // Show remaining songs
