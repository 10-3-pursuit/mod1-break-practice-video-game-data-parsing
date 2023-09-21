const gamesData = require('./data/data.json');

/**
 * findHighRatedGames - Finds high-rated games.
 * @param {Object[]} games - Array of game objects.
 * @param {number} rating - Minimum rating to filter games by.
 * @return {string[]} - Array of game titles with a rating higher than the provided rating.
 * 
 * EXAMPLE:
 * findHighRatedGames(gamesData, 9.5)
 * 
 * OUTPUT:
 * [
      "Shadow Hunters: Lena's Pursuit",
      "Mystic Realm: Ivy's Prophecy",
    ]
 */
function findHighRatedGames(games, rating) {}

/** multiplayerGameCount
 * Counts multiplayer and single-player games.
 * @param {Object[]} games - Array of game objects.
 * @return {Object} - Object with the count of multiplayer and count of single-player games.
 *
 * EXAMPLE:
 * multiplayerGameCount(gamesData)
 * OUTPUT:
 * { multiplayer: 8, singlePlayer: 2 }
 */

function multiplayerGameCount(games) {}

/**averageCompletionTime
 * Calculates average completion time for games of a specified genre.
 * @param {Object[]} games - Array of game objects.
 * @param {string} genre - Genre to filter games by.
 * @return {Object} - Object with average minimum (averageMin) and maximum (averageMax) completion time for the specified genre.
 *
 * EXAMPLE:
 * averageCompletionTime(gamesData, 'Action')
 *
 * OUTPUT:
 * { averageMin: 1562.5, averageMax: 3125 }
 */

function averageCompletionTime(games, genre) {}

/**listProtagonistsInActionGames
 * Lists protagonists in action games that support multiplayer online modes.
 * @param {Object[]} games - Array of game objects.
 * @return {string[]} - Array of protagonist names in action games with online multiplayer support.
 */

function listProtagonistsInActionGames(games) {}

/**listGenresWithGames
 * Generates a list of genres with the titles of games under each genre.
 * @param {Object[]} games - Array of game objects.
 * @return {Object} - An object where the keys are genres and the values are arrays of game titles belonging to that genre.
 */

function listGenresWithGames(games) {}

/**findCommonGenreGames
 * Finds all pairs of games with more than one common genre.
 * @param {Object[]} games - Array of game objects.
 * @return {Object[]} - An array of objects, each containing the titles of two games and an array of their common genres.
 * 
 * 
 * EXAMPLE:
 * findCommonGenreGames([
 *   {
 *      title: 'Single Genre Game',
 *       genres: ['UniqueGenre']
 *     },
 *   {
 *      title: 'Another Single Genre Game',
 *      genres: ['AnotherUniqueGenre']
 *    }
    ]

    OUTPUT:
    []
 */

function findCommonGenreGames(games) {}

module.exports = {
  findHighRatedGames,
  multiplayerGameCount,
  averageCompletionTime,
  listProtagonistsInActionGames,
  listGenresWithGames,
  findCommonGenreGames
};
