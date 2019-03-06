const assert = require('chai').assert;
const SoftUniFy = require('./softunify');

describe('SoftUniFy', function () {
    let softunify;
    beforeEach(() => {
        softunify = new SoftUniFy();
    });

    it('should have property', function () {
        assert.property(softunify, 'allSongs');
    });

    it('should return correct object', function () {
        let artist = 'artist';
        let song = 'song';
        let lyrics = 'lyrics';

        let expectedResult = {
            'allSongs': {
                artist:
                {
                    rate: 0,
                    votes: 0,
                    songs: [`${song} - ${lyrics}`]
                }
            }
        };

        assert.deepEqual(softunify.downloadSong(artist, song, lyrics), expectedResult);
    });

    it('should return incorrect result', function () {
        softunify.downloadSong('artist', 'song', 'lyrics');

        let result = softunify.playSong('test');
        let expectedResult = `You have not downloaded a test song yet. Use SoftUniFy's function downloadSong() to change that!`;

        assert.equal(result, expectedResult);
    });

    it('should rate artist', function () {
        softunify.downloadSong('artist', 'song', 'lyrics');

        let result = softunify.rateArtist('test');
        let expectedResult = `The test is not on your artist list.`;

        assert.equal(result, expectedResult);
    });
});