const gamesData = require('./data/data.json');
/**
 * Finds high-rated games.
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
function findHighRatedGames(games, rating) {
  return games
    .filter((game) => game.ratings.IGN > rating)
    .map((game) => game.title);
}

/**
 * Counts multiplayer and single-player games.
 * @param {Object[]} games - Array of game objects.
 * @return {Object} - Object with the count of multiplayer and count of single-player games.
 *
 * EXAMPLE:
 * multiplayerGameCount(gamesData)
 * OUTPUT:
 * { multiplayer: 8, singlePlayer: 2 }
 */

function multiplayerGameCount(games) {
  return games.reduce(
    (acc, game) => {
      game.features.multiplayer.online ? acc.multiplayer++ : acc.singlePlayer++;
      return acc;
    },
    { multiplayer: 0, singlePlayer: 0 }
  );
}

/**
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

function averageCompletionTime(games, genre) {
  const filteredGames = games.filter((game) => game.genres.includes(genre));
  const total = filteredGames.reduce(
    (acc, game) => {
      acc.min += game.minimumCompleteTime;
      acc.max += game.maximumCompleteTime;
      return acc;
    },
    { min: 0, max: 0 }
  );

  return {
    averageMin: total.min / filteredGames.length || 0,
    averageMax: total.max / filteredGames.length || 0
  };
}

/**
 * Lists protagonists in action games that support multiplayer online modes.
 * @param {Object[]} games - Array of game objects.
 * @return {string[]} - Array of protagonist names in action games with online multiplayer support.
 */

function listProtagonistsInActionGames(games) {
  return games
    .filter((game) => game.genres.includes('Action'))
    .map((game) => game.protagonist.name);
}

/**
 * Generates a list of genres with the titles of games under each genre.
 * @param {Object[]} games - Array of game objects.
 * @return {Object} - An object where the keys are genres and the values are arrays of game titles belonging to that genre.
 */

function listGenresWithGames(games) {
  const genresWithGames = {};

  games.forEach((game) => {
    game.genres.forEach((genre) => {
      if (!genresWithGames[genre]) {
        genresWithGames[genre] = [];
      }
      genresWithGames[genre].push(game.title);
    });
  });

  return genresWithGames;
}

/**
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

function findCommonGenreGames(games) {
  const commonGenrePairs = [];

  for (let i = 0; i < games.length; i++) {
    for (let j = i + 1; j < games.length; j++) {
      const commonGenres = games[i].genres.filter((genre) =>
        games[j].genres.includes(genre)
      );

      if (commonGenres.length > 1) {
        commonGenrePairs.push({
          game1: games[i].title,
          game2: games[j].title,
          commonGenres
        });
      }
    }
  }

  return commonGenrePairs;
}

console.log(findCommonGenreGames(gamesData));

module.exports = {
  findHighRatedGames,
  multiplayerGameCount,
  averageCompletionTime,
  listProtagonistsInActionGames,
  listGenresWithGames,
  findCommonGenreGames
};
