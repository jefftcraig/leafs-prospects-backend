// const today = new Date();
// const currentFinnishYear = today.getMonth() + 1 < 9 ? `${today.getFullYear()}` : `${today.getFullYear() + 1}`;
const qmjhl_season_id = 193;

// EXAMPLE (See 'scraper/league_scraper' individual files for specific URLs for each league)
// {
//   first_name: 'Timothy',
//   last_name: 'Liljegren',
//   position: 'D',
//   shoots: 'R',
//   dob: '1999-04-20',
//   round: 1,
//   pick: 17,
//   draft_year: 2017,
//   player_id: 6893,
//   profile_url: 'https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=6893&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json',
//   games_url: 'https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=6893&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json',
//   league: 'AHL',
//   ep_url: 'http://www.eliteprospects.com/player.php?player=224910'
// }

module.exports.prospects = [
  {
    first_name: "Eemeli",
    last_name: "Rasanen",
    position: "D",
    shoots: "R",
    dob: "1999-03-06",
    round: 2,
    pick: 59,
    draft_year: 2017,
    player_id: 31190,
    profile_url: "https://en.khl.ru/players/31190/",
    games_url: "https://en.khl.ru/players/31190/",
    league: "KHL",
    ep_url: "http://www.eliteprospects.com/player.php?player=302228"
  },
  {
    first_name: "Timothy",
    last_name: "Liljegren",
    position: "D",
    shoots: "R",
    dob: "1999-04-20",
    round: 1,
    pick: 17,
    draft_year: 2017,
    player_id: 6893,
    profile_url:
      "https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=6893&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json",
    games_url:
      "https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=6893&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json",
    league: "AHL",
    ep_url: "http://www.eliteprospects.com/player.php?player=224910"
  },
  {
    first_name: "Jeremy",
    last_name: "Bracco",
    position: "RW",
    shoots: "R",
    dob: "1997-03-17",
    round: 2,
    pick: 61,
    draft_year: 2015,
    player_id: 6891,
    profile_url:
      "https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=6891&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json",
    games_url:
      "https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=6891&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json",
    league: "AHL",
    ep_url: "http://www.eliteprospects.com/player.php?player=197800"
  },
  {
    first_name: "Adam",
    last_name: "Brooks",
    position: "C",
    shoots: "L",
    dob: "1996-05-06",
    round: 4,
    pick: 92,
    draft_year: 2016,
    player_id: 6888,
    profile_url:
      "https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=6888&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json",
    games_url:
      "https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=6888&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json",
    league: "AHL",
    ep_url: "http://www.eliteprospects.com/player.php?player=120202"
  },
  {
    first_name: "Yegor",
    last_name: "Korshkov",
    position: "RW",
    shoots: "L",
    dob: "1996-07-10",
    round: 2,
    pick: 31,
    draft_year: 2016,
    player_id: 7668,
    profile_url:
      "https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=7668&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json",
    games_url:
      "https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=7668&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json",
    league: "AHL",
    ep_url: "http://www.eliteprospects.com/player.php?player=176637"
  },
  {
    first_name: "Vladislav",
    last_name: "Kara",
    position: "C",
    shoots: "L",
    dob: "1998-04-20",
    round: 4,
    pick: 124,
    draft_year: 2017,
    player_id: 22888,
    profile_url: "http://www.vhlru.ru/en/players/22888/",
    games_url: "http://www.vhlru.ru/en/players/22888/games",
    // profile_url: 'https://en.khl.ru/players/22888/', // KHL
    // games_url: 'https://en.khl.ru/players/22888/', // KHL
    league: "VHL",
    ep_url: "http://www.eliteprospects.com/player.php?player=322627"
  },
  {
    first_name: "Nikolai",
    last_name: "Chebykin",
    position: "W",
    shoots: "L",
    dob: "1997-08-01",
    round: 7,
    pick: 182,
    draft_year: 2016,
    player_id: 22161,
    profile_url: "http://www.vhlru.ru/en/players/22161/",
    games_url: "http://www.vhlru.ru/en/players/22161/games/",
    league: "VHL",
    ep_url: "http://www.eliteprospects.com/player.php?player=300931"
  },
  {
    first_name: "Vladimir",
    last_name: "Bobylyov",
    position: "W",
    shoots: "L",
    dob: "1997-04-18",
    round: 5,
    pick: 122,
    draft_year: 2016,
    player_id: 21313,
    profile_url: "http://www.vhlru.ru/en/players/21313/",
    games_url: "http://www.vhlru.ru/en/players/21313/games/",
    // profile_url: 'https://en.khl.ru/players/21313/', KHL
    // games_url: 'https://en.khl.ru/players/21313/', KHL
    league: "VHL",
    ep_url: "http://www.eliteprospects.com/player.php?player=268059"
  },
  {
    first_name: "Ryan",
    last_name: "O'Connell",
    position: "D",
    shoots: "L",
    dob: "1999-04-25",
    round: 7,
    pick: 203,
    draft_year: 2017,
    player_id: 36023,
    profile_url: "http://collegehockeyinc.com/stats/players20.php?osum16",
    games_url: "http://collegehockeyinc.com/stats/players20.php?osum16",
    league: "NCAA",
    ep_url: "https://www.eliteprospects.com/player/286946/ryan-o-connell"
  },
  {
    first_name: "James",
    last_name: "Greenway",
    position: "D",
    shoots: "L",
    dob: "1998-04-27",
    round: 3,
    pick: 72,
    draft_year: 2016,
    player_id: 31877,
    profile_url: "http://collegehockeyinc.com/stats/players20.php?mnem23",
    games_url: "http://collegehockeyinc.com/stats/players20.php?mnem23",
    league: "NCAA",
    ep_url: "http://www.eliteprospects.com/player.php?player=226438"
  },
  {
    first_name: "Jesper",
    last_name: "Lindgren",
    position: "D",
    shoots: "R",
    dob: "1997-05-19",
    round: 4,
    pick: 95,
    draft_year: 2015,
    player_id: 6756,
    profile_url:
      "https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=6756&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json",
    games_url:
      "https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=6756&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json",
    // profile_url: 'http://liiga.fi/pelaajat/100025980/lindgren-jesper',
    // games_url: 'http://liiga.fi/fi/pelaajat/100025980/lindgren-jesper/ottelu-ottelulta',
    league: "AHL",
    ep_url: "http://www.eliteprospects.com/player.php?player=187806"
  },
  {
    first_name: "Rasmus",
    last_name: "Sandin",
    position: "D",
    shoots: "L",
    dob: "2000-03-07",
    round: 1,
    pick: 29,
    draft_year: 2018,
    player_id: 7314,
    profile_url:
      "https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=7314&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json",
    games_url:
      "https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=7314&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json",
    league: "AHL",
    ep_url: "https://www.eliteprospects.com/player/289453/rasmus-sandin"
  },
  {
    first_name: "Semyon",
    last_name: "Der-Arguchintsev",
    position: "C",
    shoots: "R",
    dob: "2000-09-15",
    round: 3,
    pick: 76,
    draft_year: 2018,
    player_id: 7484,
    profile_url:
      "http://lscluster.hockeytech.com/feed/?feed=modulekit&view=player&key=2976319eb44abe94&fmt=json&client_code=ohl&lang=en&player_id=7484&category=seasonstats",
    games_url:
      "http://lscluster.hockeytech.com/feed/?feed=modulekit&view=player&key=2976319eb44abe94&fmt=json&client_code=ohl&lang=en&player_id=7484&category=gamebygame",
    league: "OHL",
    ep_url:
      "https://www.eliteprospects.com/player/315260/semyon-der-arguchintsev"
  },
  {
    first_name: "Riley",
    last_name: "Stotts",
    position: "C",
    shoots: "L",
    dob: "2000-01-05",
    round: 3,
    pick: 83,
    draft_year: 2018,
    player_id: 27355,
    profile_url:
      "http://lscluster.hockeytech.com/feed/?feed=modulekit&view=player&key=41b145a848f4bd67&fmt=json&client_code=whl&lang=en&player_id=27355&category=seasonstats",
    games_url:
      "http://lscluster.hockeytech.com/feed/?feed=modulekit&view=player&key=41b145a848f4bd67&fmt=json&client_code=whl&lang=en&player_id=27355&category=gamebygame",
    league: "WHL",
    ep_url: "https://www.eliteprospects.com/player/201715/riley-stotts"
  },
  {
    first_name: "Mac",
    last_name: "Hollowell",
    position: "D",
    shoots: "R",
    dob: "1998-09-26",
    round: 4,
    pick: 118,
    draft_year: 2018,
    player_id: "c8ff052d590070ffd158a1c4",
    profile_url:
      "https://www.echl.com/api/s3?q=player-b7ea99e8a16f1597fada3b6d.json",
    games_url: "",
    // profile_url: 'https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=7303&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json',
    // games_url: 'https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=7303&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json',
    league: "ECHL",
    ep_url: "https://www.eliteprospects.com/player/267652/mac-hollowell"
  },
  {
    first_name: "Filip",
    last_name: "Kral",
    position: "D",
    shoots: "L",
    dob: "1999-10-20",
    round: 5,
    pick: 149,
    draft_year: 2018,
    player_id: 27960,
    profile_url:
      "http://lscluster.hockeytech.com/feed/?feed=modulekit&view=player&key=41b145a848f4bd67&fmt=json&client_code=whl&lang=en&player_id=27960&category=seasonstats",
    games_url:
      "http://lscluster.hockeytech.com/feed/?feed=modulekit&view=player&key=41b145a848f4bd67&fmt=json&client_code=whl&lang=en&player_id=27960&category=gamebygame",
    league: "WHL",
    ep_url: "https://www.eliteprospects.com/player/247241/filip-kral"
  },
  {
    first_name: "Pontus",
    last_name: "Holmberg",
    position: "LW",
    shoots: "L",
    dob: "1999-03-09",
    round: 6,
    pick: 156,
    draft_year: 2018,
    player_id: 0,
    profile_url:
      "https://www.shl.se/lag/fe02-fe02mf1FN__vaxjo-lakers/qTK-4a8Y9mMrn__pontus-holmberg/statistics",
    games_url:
      "https://www.shl.se/lag/fe02-fe02mf1FN__vaxjo-lakers/qTK-4a8Y9mMrn__pontus-holmberg/gamelog",
    league: "SHL",
    ep_url: "https://www.eliteprospects.com/player/265859/pontus-holmberg"
  },
  {
    first_name: "Semyon",
    last_name: "Kizimov",
    position: "LW",
    shoots: "L",
    dob: "2000-01-19",
    round: 7,
    pick: 211,
    draft_year: 2018,
    player_id: 25697,
    profile_url: "http://www.vhlru.ru/en/players/25697/",
    games_url: "http://www.vhlru.ru/en/players/25697/games/",
    league: "VHL",
    ep_url: "https://www.eliteprospects.com/player/420947/semyon-kizimov"
  },
  {
    first_name: "Joseph",
    last_name: "Duszak",
    position: "D",
    shoots: "R",
    dob: "1997-07-22",
    round: null,
    pick: null,
    draft_year: null,
    player_id: 7517,
    profile_url:
      "https://www.echl.com/api/s3?q=player-a7a81ba19f324b9a59b9c0ea.json",
    games_url: "",
    // profile_url: 'https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=7517&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json',
    // games_url: 'https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=7517&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json',
    league: "ECHL",
    ep_url: "http://www.eliteprospects.com/player.php?player=262071"
  },
  {
    first_name: "Colton",
    last_name: "Conrad",
    position: "C",
    shoots: "R",
    dob: "1997-04-27",
    round: null,
    pick: null,
    draft_year: null,
    player_id: 7544,
    profile_url:
      "https://www.echl.com/api/s3?q=player-c8ff052d590070ffd158a1c4.json",
    games_url: "",
    // profile_url: 'https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=7544&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json',
    // games_url: 'https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=7544&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json',
    league: "ECHL",
    ep_url: "http://www.eliteprospects.com/player.php?player=199895"
  },
  {
    first_name: "Justin",
    last_name: "Brazeau",
    position: "RW",
    shoots: "R",
    dob: "1998-02-02",
    round: null,
    pick: null,
    draft_year: null,
    player_id: 7989,
    profile_url:
      "https://www.echl.com/api/s3?q=player-5ae4e4e2e12fbdac1ee2e381.json",
    games_url: "",
    // profile_url: 'https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=7989&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json',
    // games_url: 'https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=7989&site_id=1&key=50c2cd9b5e18e390&client_code=ahl&league_id=&lang=en&statsType=standard&callback=json',
    league: "ECHL",
    ep_url: "http://www.eliteprospects.com/player.php?player=217051"
  },
  {
    first_name: "Nick",
    last_name: "Robertson",
    position: "LW",
    shoots: "L",
    dob: "2001-09-11",
    round: 2,
    pick: 53,
    draft_year: 2019,
    player_id: 7662,
    profile_url:
      "http://lscluster.hockeytech.com/feed/?feed=modulekit&view=player&key=2976319eb44abe94&fmt=json&client_code=ohl&lang=en&player_id=7662&category=seasonstats",
    games_url:
      "http://lscluster.hockeytech.com/feed/?feed=modulekit&view=player&key=2976319eb44abe94&fmt=json&client_code=ohl&lang=en&player_id=7662&category=gamebygame",
    league: "OHL",
    ep_url: "https://www.eliteprospects.com/player/359539/nicholas-robertson"
  },
  {
    first_name: "Mikko",
    last_name: "Kokkonen",
    position: "D",
    shoots: "L",
    dob: "2001-01-18",
    round: 3,
    pick: 84,
    draft_year: 2019,
    player_id: 31128854,
    // Liiga Links
    // profile_url: 'https://liiga.fi/fi/pelaajat/31128854/kokkonen-mikko',
    // games_url: 'https://liiga.fi/fi/pelaajat/31128854/kokkonen-mikko/ottelu-ottelulta',
    profile_url: "https://liiga.fi/fi/pelaajat/31128854/kokkonen-mikko",
    games_url:
      "https://liiga.fi/fi/pelaajat/31128854/kokkonen-mikko/ottelu-ottelulta",
    league: "Liiga",
    ep_url: "https://www.eliteprospects.com/player/347571/mikko-kokkonen"
  },
  {
    first_name: "Mikhail",
    last_name: "Abramov",
    position: "C",
    shoots: "L",
    dob: "2001-03-26",
    round: 4,
    pick: 115,
    draft_year: 2019,
    player_id: 7662,
    profile_url:
      "https://lscluster.hockeytech.com/feed/index.php?feed=widgetkit2&key=f322673b6bcae299&p=1&client_code=lhjmq&view=Teamstat&fmt=json&player_id=17871&lang=en&force_player=0&callback=json",
    games_url: `https://lscluster.hockeytech.com/feed/index.php?feed=widgetkit2&key=f322673b6bcae299&client_code=lhjmq&view=Gamebygame&lang=en&season_id=${qmjhl_season_id}&fmt=json&dfdsfdsa=2fdsa&player_id=17871&force_player=0&callback=json`,
    league: "QMJHL",
    ep_url: "https://www.eliteprospects.com/player/514653/mikhail-abramov"
  },
  {
    first_name: "Nick",
    last_name: "Abruzzese",
    position: "C",
    shoots: "L",
    dob: "1999-06-04",
    round: 4,
    pick: 124,
    draft_year: 2019,
    player_id: 7631,
    profile_url: "http://collegehockeyinc.com/stats/players20.php?harm22",
    games_url: "http://collegehockeyinc.com/stats/players20.php?harm22",
    league: "NCAA",
    ep_url: "https://www.eliteprospects.com/player/201476/nick-abruzzese"
  },
  {
    first_name: "Mike",
    last_name: "Koster",
    position: "D",
    shoots: "L",
    dob: "2001-04-13",
    round: 5,
    pick: 146,
    draft_year: 2019,
    player_id: 7842,
    profile_url:
      "https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=7842&site_id=0&key=e828f89b243dc43f&client_code=ushl&league_id=&lang=en&statsType=standard&callback=json",
    games_url:
      "https://lscluster.hockeytech.com/feed/index.php?feed=statviewfeed&view=player&player_id=7842&site_id=0&key=e828f89b243dc43f&client_code=ushl&league_id=&lang=en&statsType=standard&callback=json",
    league: "USHL",
    ep_url: "https://www.eliteprospects.com/player/427432/mike-koster"
  },
  {
    first_name: "Kalle",
    last_name: "Loponen",
    position: "D",
    shoots: "R",
    dob: "2001-03-13",
    round: 7,
    pick: 204,
    draft_year: 2019,
    player_id: 8294,
    profile_url:
      "http://lscluster.hockeytech.com/feed/?feed=modulekit&view=player&key=2976319eb44abe94&fmt=json&client_code=ohl&lang=en&player_id=8294&category=seasonstats",
    games_url:
      "http://lscluster.hockeytech.com/feed/?feed=modulekit&view=player&key=2976319eb44abe94&fmt=json&client_code=ohl&lang=en&player_id=8294&category=gamebygame",
    league: "OHL",
    ep_url: "https://www.eliteprospects.com/player/395424/kalle-loponen"
  },
];
