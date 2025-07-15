## Reflection: Playlist Object Review

### What was the hardest part to understand?
The hardest part was remembering to use `this` correctly inside the methods. At first I kept forgetting that `this.songs` refers to the playlist's own song list. Once I got used to it, it made more sense how the object keeps track of its own data.

### How does this code use `this` to tie data and behavior together?
Each method uses `this` to connect to the playlist's specific properties like `songs`, `name`, or `currentSong`. That way, the same method works for any playlist without hardcoding values. It lets the behavior always act on the current object.

### What would you do differently if you wrote this object from scratch?
I would probably add a method to shuffle the songs or jump to a specific one by index. I’d also make it so the playlist could show which song is playing with its position number. Right now it works, but it could be more interactive.
