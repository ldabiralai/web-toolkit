export const doubleChoiceData = {
  sponsor: {
    name: 'Betline',
    backgroundColor: '#b4292c',
    textColor: '#ffffff',
  },
  sentences: ['Pariez !', 'PARIEZ AVEC Betline'],
  choices: [
    { number: 1, cote: 2.8, label: 'Nadal', position: 'left', link: 'http://google.fr' },
    { number: 2, cote: 1.7, label: 'Federer', position: 'right', link: 'http://bing.fr' },
  ],
};

export const tripleChoiceData = {
  ...doubleChoiceData,
  choices: [
    { number: 1, cote: 2.8, label: 'Nadal', position: 'left', link: 'http://google.fr' },
    { number: 2, cote: 4.9, link: 'http://yahoo.fr' },
    { number: 3, cote: 1.7, label: 'Federer', position: 'right', link: 'http://bing.fr' },
  ],
};

export const alternativeLogo = {
  ...doubleChoiceData,
  sponsor: {
    name: 'AlterBet',
    backgroundColor: '#6decb9',
    textColor: '#3c3c3c',
  },
  sentences: ['Alternate with AlterBet !', 'AlterBet for the BETter'],
};
