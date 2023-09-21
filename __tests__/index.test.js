const {
  findHighRatedGames,
  multiplayerGameCount,
  averageCompletionTime,
  listProtagonistsInActionGames,
  listGenresWithGames,
  findCommonGenreGames
} = require('../');
const gamesData = require('../data/data.json');

describe('findHighRatedGames', () => {
  test('should return games with IGN rating above 9.0', () => {
    const highRatedGames = findHighRatedGames(gamesData, 9.0);
    const expected = [
      "Ocean's Whisper: Ariel's Legacy",
      "Celestial Quest: Lila's Journey",
      'Futuristic City Racers',
      "Nebula Warriors: Zara's Strike",
      "Shadow Hunters: Lena's Pursuit",
      "Sky Pirates: Fiona's Rebellion",
      "Mystic Realm: Ivy's Prophecy"
    ];

    expect(highRatedGames).toEqual(expected);
  });

  test('should return games with IGN rating above 9.5', () => {
    const highRatedGames = findHighRatedGames(gamesData, 9.5);
    const expected = [
      "Shadow Hunters: Lena's Pursuit",
      "Mystic Realm: Ivy's Prophecy"
    ];
    expect(highRatedGames).toEqual(expected);
  });

  test('should return an empty array if no games have ratings above the specified threshold', () => {
    const highRatedGames = findHighRatedGames(gamesData, 10);

    expect(highRatedGames).toEqual([]);
  });
});

describe('multiplayerGameCount', () => {
  test('should return an object containing the count of multiplayer games and their titles', () => {
    const multiplayerGames = multiplayerGameCount(gamesData);

    expect(multiplayerGames).toEqual({ multiplayer: 8, singlePlayer: 2 });
  });
});

describe('averageCompletionTime', () => {
  test('should return correct average completion times for a given genre', () => {
    const genre = 'Action';
    const result = averageCompletionTime(gamesData, genre);

    expect(result).toEqual({
      averageMin: expect.any(Number),
      averageMax: expect.any(Number)
    });
  });

  test('should return zeros if the genre is not found', () => {
    const genre = 'NonExistentGenre';
    const result = averageCompletionTime(gamesData, genre);

    expect(result).toEqual({
      averageMin: 0,
      averageMax: 0
    });
  });

  test('should handle an empty array gracefully', () => {
    const genre = 'Action';
    const result = averageCompletionTime([], genre);

    expect(result).toEqual({
      averageMin: 0,
      averageMax: 0
    });
  });
});
describe('listProtagonistsInActionGames', () => {
  test('should return protagonists from action games', () => {
    const result = listProtagonistsInActionGames(gamesData);
    const expected = [
      'Ariel',
      'Lila',
      'Zara',
      'Sarah',
      'Lena',
      'Fiona',
      'Aisha',
      'Max'
    ];
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result).toHaveLength(expected.length);
  });

  test('should return an empty array if no games are provided', () => {
    const result = listProtagonistsInActionGames([]);
    expect(result).toEqual([]);
  });

  test('should return an empty array if no action games are found', () => {
    const nonActionGames = gamesData.filter(
      (game) => !game.genres.includes('Action')
    );
    const result = listProtagonistsInActionGames(nonActionGames);
    expect(result).toEqual([]);
  });
});

describe('listGenresWithGames', () => {
  test('should list genres along with their list of titles', () => {
    const result = listGenresWithGames(gamesData);
    const expected = {
      Adventure: [
        "Ocean's Whisper: Ariel's Legacy",
        "Celestial Quest: Lila's Journey",
        "Time Rift: Sarah's Escape",
        "Sky Pirates: Fiona's Rebellion",
        "Desert Mirage: Aisha's Odyssey",
        "Mystic Realm: Ivy's Prophecy"
      ],
      Action: [
        "Ocean's Whisper: Ariel's Legacy",
        "Celestial Quest: Lila's Journey",
        "Nebula Warriors: Zara's Strike",
        "Time Rift: Sarah's Escape",
        "Shadow Hunters: Lena's Pursuit",
        "Sky Pirates: Fiona's Rebellion",
        "Desert Mirage: Aisha's Odyssey",
        "Urban Runner: Max's Adventure"
      ],
      Fantasy: [
        "Ocean's Whisper: Ariel's Legacy",
        "Celestial Quest: Lila's Journey",
        "Mystic Realm: Ivy's Prophecy"
      ],
      Racing: ['Futuristic City Racers'],
      Simulation: ['Futuristic City Racers'],
      'Open World': ['Futuristic City Racers', "Urban Runner: Max's Adventure"],
      Shooter: ["Nebula Warriors: Zara's Strike"],
      'Sci-Fi': ["Nebula Warriors: Zara's Strike"],
      Puzzle: ["Time Rift: Sarah's Escape", "Desert Mirage: Aisha's Odyssey"],
      Stealth: ["Shadow Hunters: Lena's Pursuit"],
      Horror: ["Shadow Hunters: Lena's Pursuit"],
      Strategy: ["Sky Pirates: Fiona's Rebellion"],
      Parkour: ["Urban Runner: Max's Adventure"],
      RPG: ["Mystic Realm: Ivy's Prophecy"]
    };
    expect(result).toEqual(expected);
  });

  test('should return an empty object if no games are provided', () => {
    const result = listGenresWithGames([]);
    expect(result).toEqual({});
  });
});

describe('findCommonGenreGames', () => {
  test('should find all pairs of games with more than one common genre', () => {
    const result = findCommonGenreGames(gamesData);
    const expected = [
      {
        game1: "Ocean's Whisper: Ariel's Legacy",
        game2: "Celestial Quest: Lila's Journey",
        commonGenres: ['Adventure', 'Action', 'Fantasy']
      },
      {
        game1: "Ocean's Whisper: Ariel's Legacy",
        game2: "Time Rift: Sarah's Escape",
        commonGenres: ['Adventure', 'Action']
      },
      {
        game1: "Ocean's Whisper: Ariel's Legacy",
        game2: "Sky Pirates: Fiona's Rebellion",
        commonGenres: ['Adventure', 'Action']
      },
      {
        game1: "Ocean's Whisper: Ariel's Legacy",
        game2: "Desert Mirage: Aisha's Odyssey",
        commonGenres: ['Adventure', 'Action']
      },
      {
        game1: "Ocean's Whisper: Ariel's Legacy",
        game2: "Mystic Realm: Ivy's Prophecy",
        commonGenres: ['Adventure', 'Fantasy']
      },
      {
        game1: "Celestial Quest: Lila's Journey",
        game2: "Time Rift: Sarah's Escape",
        commonGenres: ['Adventure', 'Action']
      },
      {
        game1: "Celestial Quest: Lila's Journey",
        game2: "Sky Pirates: Fiona's Rebellion",
        commonGenres: ['Adventure', 'Action']
      },
      {
        game1: "Celestial Quest: Lila's Journey",
        game2: "Desert Mirage: Aisha's Odyssey",
        commonGenres: ['Adventure', 'Action']
      },
      {
        game1: "Celestial Quest: Lila's Journey",
        game2: "Mystic Realm: Ivy's Prophecy",
        commonGenres: ['Adventure', 'Fantasy']
      },
      {
        game1: "Time Rift: Sarah's Escape",
        game2: "Sky Pirates: Fiona's Rebellion",
        commonGenres: ['Action', 'Adventure']
      },
      {
        game1: "Time Rift: Sarah's Escape",
        game2: "Desert Mirage: Aisha's Odyssey",
        commonGenres: ['Action', 'Adventure', 'Puzzle']
      },
      {
        game1: "Sky Pirates: Fiona's Rebellion",
        game2: "Desert Mirage: Aisha's Odyssey",
        commonGenres: ['Action', 'Adventure']
      }
    ];

    expect(result).toEqual(expected);
  });

  test('should return an empty array if no games are provided', () => {
    const result = findCommonGenreGames([]);
    expect(result).toEqual([]);
  });

  test('should return an empty array if no pairs with common genres are found', () => {
    const result = findCommonGenreGames([
      {
        title: 'Single Genre Game',
        genres: ['UniqueGenre']
      },
      {
        title: 'Another Single Genre Game',
        genres: ['AnotherUniqueGenre']
      }
    ]);
    expect(result).toEqual([]);
  });
});
