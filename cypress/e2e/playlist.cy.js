describe("Playlist Functionality", () => {
  it("Should update the playlist correctly", () => {
    const songs = ["S1", "S2", "S3", "S4"];
    const capacity = 3;

    const playlist = [];

    for (let i = 0; i < capacity; i++) {
      cy.log(`Playlist Songs: ${songs[i]}`);
      playlist.push(songs[i]);
    }

    cy.log("IPlaylist: " + playlist.join(","));

    cy.log("Playing 4th song: " + songs[3]);
    playlist.shift();
    playlist.push(songs[3]);

    cy.log("Updated Playlist: " + playlist.join(","));

    cy.log("Playing 2nd song: " + songs[1]);
    playlist.shift();
    playlist.push(songs[1]);

    cy.log("Updated Playlist: " + playlist.join(","));

    cy.log("Playing 1st song: " + songs[0]);
    playlist.shift(); 
    playlist.push(songs[0]);

    cy.log("Updated Playlist: " + playlist.join(","));

    cy.wrap(playlist).should("deep.equal", ["S4", "S2", "S1"]);
  });
});
