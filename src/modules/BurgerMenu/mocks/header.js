export default {
  items: [
    {
      id: 1,
      name: 'Accueil',
      link: {
        url: '/',
        blank: false,
      },
      isBottom: false,
      items: [],
      isWatch: false,
    },
    {
      id: 2,
      name: 'Tous les sports',
      sections: [
        {
          name: 'Sports à la Une',
          columnType: 'popular-sports',
          items: [
            {
              name: 'Football',
              link: {
                url: '/football/',
                blank: false,
              },
              isBottom: false,
              items: [],
              isWatch: false,
            },
            {
              name: 'Tennis',
              link: {
                url: '/tennis/',
                blank: false,
              },
              isBottom: false,
              items: [],
              isWatch: false,
            },
          ],
        },
        {
          name: 'Tous les sports',
          columnType: 'all-sports',
          items: [
            {
              name: 'Football',
              link: {
                url: '/football/',
                blank: false,
              },
              isBottom: false,
              items: [
                {
                  name: 'Accueil football',
                  link: {
                    url: '/football/',
                    blank: false,
                  },
                  isBottom: false,
                  items: [],
                  isWatch: false,
                },
                {
                  name: 'Ligue 1',
                  link: {
                    url: '/football/ligue-1/',
                    blank: false,
                  },
                  isBottom: false,
                  items: [],
                  isWatch: false,
                },
              ],
              isWatch: false,
            },
            {
              name: 'Tennis',
              link: {
                url: '/tennis/',
                blank: false,
              },
              isBottom: false,
              items: [
                {
                  name: 'Accueil tennis',
                  link: {
                    url: '/tennis/',
                    blank: false,
                  },
                  isBottom: false,
                  items: [],
                  isWatch: false,
                },
                {
                  name: "Open d'Australie",
                  link: {
                    url: '/tennis/open-d-australie/',
                    blank: false,
                  },
                  isBottom: false,
                  items: [],
                  isWatch: false,
                },
                {
                  name: 'Roland-Garros',
                  link: {
                    url: '/tennis/roland-garros/',
                    blank: false,
                  },
                  isBottom: false,
                  items: [],
                  isWatch: false,
                },
              ],
              isWatch: false,
            },
            {
              name: 'Rugby',
              link: {
                url: 'https://int.rugbyrama.fr/',
                blank: false,
              },
              isBottom: false,
              items: [
                {
                  name: 'Accueil rugby',
                  link: {
                    url: 'https://int.rugbyrama.fr/',
                    blank: false,
                  },
                  isBottom: false,
                  items: [],
                  isWatch: false,
                },
                {
                  name: 'Top 14',
                  link: {
                    url: 'https://int.rugbyrama.fr/rugby/top-14/',
                    blank: false,
                  },
                  isBottom: false,
                  items: [],
                  isWatch: false,
                },
                {
                  name: 'Pro D2',
                  link: {
                    url: 'https://int.rugbyrama.fr/rugby/pro-d2/',
                    blank: false,
                  },
                  isBottom: false,
                  items: [],
                  isWatch: false,
                },
              ],
              isWatch: false,
            },
            {
              name: 'Boxe',
              link: {
                url: '/boxe/',
                blank: false,
              },
              isBottom: false,
              items: [],
              isWatch: false,
            },
          ],
        },
      ],
      isBottom: false,
      items: [],
      isWatch: false,
      menuType: 'sports',
    },
    {
      id: 3,
      name: 'Vidéos',
      link: {
        url: 'https://int-video.eurosport.fr',
        blank: false,
      },
      isBottom: false,
      items: [],
      isWatch: false,
    },
    {
      id: 4,
      name: "S'abonner à Eurosport",
      link: {
        url: '/regardez-eurosport-en-direct.shtml',
        blank: false,
      },
      sections: [
        {
          name: "S'abonner",
          items: [
            {
              name: 'Home watch',
              link: {
                url: '/regardez-eurosport-en-direct.shtml',
                blank: false,
              },
              isBottom: false,
              items: [],
              isWatch: false,
            },
            {
              name: 'Guide TV',
              link: {
                url: '/eurosport-guide-tv.shtml',
                blank: false,
              },
              isBottom: false,
              items: [],
              isWatch: false,
            },
            {
              name: 'Comment regarder Eurosport ?',
              link: {
                url: 'https://int.eurosport.fr/watch-eurosport-how.shtml',
                blank: false,
              },
              isBottom: false,
              items: [],
              isWatch: false,
            },
            {
              name: 'A ne pas manquer sur Eurosport',
              link: {
                url: 'https://int.eurosport.fr/watch-eurosport-how.shtml',
                blank: false,
              },
              isBottom: false,
              items: [],
              isWatch: false,
            },
            {
              name: 'Prochains évènements Eurosport',
              link: {
                url: 'https://int.eurosport.fr/watch-eurosport-how.shtml',
                blank: false,
              },
              isBottom: false,
              items: [],
              isWatch: false,
            },
          ],
        },
      ],
      isBottom: false,
      shortName: "S'abonner",
      items: [],
      isWatch: true,
    },
    {
      id: 5,
      name: 'Plus',
      sections: [
        {
          name: 'Plus',
          columnType: 'about-us',
          items: [
            {
              name: 'Le Buzz',
              link: {
                url: 'https://int-lebuzz.eurosport.fr/home_rub779.shtml',
                blank: false,
              },
              isBottom: false,
              items: [],
              isWatch: false,
            },
          ],
        },
        {
          name: 'Partenaires',
          columnType: 'about-us',
          items: [
            {
              name: 'SMIT – Invest in the future',
              link: {
                url: 'https://int-video.eurosport.fr/omnisport/chaine-video/smit-invest-in-the-future/',
                blank: false,
              },
              isBottom: false,
              items: [],
              isWatch: false,
            },
          ],
        },
        {
          name: 'A propos',
          columnType: 'about-us',
          items: [
            {
              name: 'Applications mobiles',
              link: {
                url: '/application-iphone.shtml',
                blank: false,
              },
              isBottom: false,
              items: [],
              isWatch: false,
            },
            {
              name: 'FAQ',
              link: {
                url: 'https://helpcenter.eurosport.com/en_ROW',
                blank: false,
              },
              isBottom: false,
              items: [],
              isWatch: false,
            },
          ],
        },
      ],
      isBottom: false,
      items: [],
      isWatch: false,
    },
    {
      id: 6,
      name: 'Version FR',
      sections: [
        {
          name: 'Sites Eurosport',
          items: [
            {
              name: 'International (English)',
              link: {
                url: 'https://int.eurosport.com',
                blank: false,
              },
              isBottom: false,
              items: [],
              isWatch: false,
            },
            {
              name: 'Internacional (Español)',
              link: {
                url: 'https://int-espanol.eurosport.com',
                blank: false,
              },
              isBottom: false,
              items: [],
              isWatch: false,
            },
          ],
        },
      ],
      isBottom: true,
      items: [],
      isWatch: false,
    },
  ],
  socialItem: {
    id: 7,
    name: 'Suivez nous sur :',
    sections: [
      {
        items: [
          {
            name: 'Facebook',
            link: {
              url: '//facebook.com/EurosportFR',
              blank: false,
            },
            isBottom: false,
            items: [],
            isWatch: false,
            icon: 'facebook',
          },
          {
            name: 'Twitter',
            link: {
              url: '//twitter.com/Eurosport_FR',
              blank: false,
            },
            isBottom: false,
            items: [],
            isWatch: false,
            icon: 'twitter',
          },
          {
            name: 'Snapchat',
            link: {
              url: '//www.snapchat.com/add/eurosportfr',
              blank: false,
            },
            isBottom: false,
            items: [],
            isWatch: false,
            icon: 'snapchat',
          },
          {
            name: 'Instagram',
            link: {
              url: '//www.instagram.com/eurosport',
              blank: false,
            },
            isBottom: false,
            items: [],
            isWatch: false,
            icon: 'instagram',
          },
        ],
      },
    ],
    isBottom: false,
    items: [],
    isWatch: false,
  },
};
