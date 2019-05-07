export const pastMatchData = {
  topTeam: {
    playerOneName: 'Federer',
    sets: [
      { set: 1, score: 6, won: true, tie: null },
      { set: 2, score: 6, won: true, tie: null },
      { set: 3, score: 6, won: false, tie: 2 },
      { set: 4, score: 6, won: true, tie: null },
      { set: 5, score: 3, won: false, tie: null },
    ],
    hasWon: true,
    isServing: false,
  },
  bottomTeam: {
    playerOneName: 'Nadal',
    sets: [
      { set: 1, score: 3, won: false, tie: null },
      { set: 2, score: 3, won: true, tie: null },
      { set: 3, score: 7, won: true, tie: 7 },
      { set: 4, score: 3, won: false, tie: null },
      { set: 5, score: 6, won: true, tie: null },
    ],
    hasWon: false,
    isServing: false,
  },
};

export const liveMatchData = {
  topTeam: {
    playerOneName: 'MENENDEZ-MACEIRAS',
    playerTwoName: 'Rahman MAKSSOUD',
    sets: [
      { set: 1, score: 6, won: true, tie: null },
      { set: 2, score: 6, won: true, tie: null },
      { set: 3, score: 6, won: false, tie: 2 },
      { set: 4, score: 6, won: true, tie: null },
      { set: 5, score: 3, won: false, tie: null },
    ],
    hasWon: null,
    isServing: false,
  },
  bottomTeam: {
    playerOneName: 'MENENDEZ-MACEIRAS',
    playerTwoName: 'DAVIDOVICH FOKINA',
    sets: [
      { set: 1, score: 3, won: false, tie: null },
      { set: 2, score: 3, won: true, tie: null },
      { set: 3, score: 7, won: true, tie: 7 },
      { set: 4, score: 3, won: false, tie: null },
      { set: 5, score: 6, won: true, tie: null },
    ],
    hasWon: null,
    isServing: true,
  },
};

export const liveMatchDataSet = {
  topTeam: {
    playerOneName: 'A. MENENDEZ-MACEIRAS',
    playerTwoName: 'A. Rahman MAKSSOUD',
    sets: [
      { set: 1, score: 6, won: true, tie: null },
      { set: 2, score: 6, won: true, tie: null },
      { set: 3, score: 6, won: false, tie: 2 },
      { set: 4, score: 6, won: true, tie: null },
      { set: 5, score: 3, won: false, tie: null },
    ],
    hasWon: null,
    isServing: false,
  },
  bottomTeam: {
    playerOneName: 'A. MENENDEZ-MACEIRAS',
    playerTwoName: 'A. DAVIDOVICH FOKINA',
    sets: [
      { set: 1, score: 3, won: false, tie: null },
      { set: 2, score: 3, won: true, tie: null },
      { set: 3, score: 7, won: true, tie: 7 },
      { set: 4, score: 3, won: false, tie: null },
      { set: 5, score: 6, won: true, tie: null },
    ],
    hasWon: null,
    isServing: true,
  },
};
