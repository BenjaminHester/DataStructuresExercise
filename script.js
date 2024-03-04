// DATA STRUCTURES
// 1a
const jedi = [];

// 1b
jedi[0] = "Luke";
console.log(jedi); // [ 'Luke' ]

// 1c
jedi.push("Obi-Wan Kenobi");
console.log(jedi); // [ 'Luke', 'Obi-Wan Kenobi' ]

// 1d
jedi.unshift("Yoda");
console.log(jedi); // [ 'Yoda', 'Luke', 'Obi-Wan Kenobi' ]

// 1e
console.log(jedi[1]); // Luke

// 1f
jedi.pop();
console.log(jedi); // [ 'Yoda', 'Luke' ]

// 1g
jedi.shift();
// jedi.splice(0, 1);
console.log(jedi); //  'Luke' ]

// 2a
const sithLords = [
  "Darth Vader",
  "Darth Sidious",
  "Darth Maul"
];

// 2b
const imperialOfficers = [
  "Grand Moff Tarkin",
  "Orson Krennic"
];

// 2c
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);
// [
//   'Darth Vader',
//   'Darth Sidious',
//   'Darth Maul',
//   'Grand Moff Tarkin',
//   'Orson Krennic'
// ]

// 2d
console.log(starWarsVillains.slice(2, 4)); // [ 'Darth Maul', 'Grand Moff Tarkin' ]

// 3a
const droids = {
  astromech: "R2-D2",
  protocol: "C-3PO",
  assassin: "IG-88"
};

// 3b
console.log(droids[`astromech`]); // R2-D2

// 3c
console.log(droids.protocol); // C-3PO

// 3d
droids.assassin = "IG-11";
console.log(droids.assassin); // IG-11

// BONUS
// 4
console.log(starWarsVillains[0][6]); // V

// 5
console.log(sithLords.slice(-2, -1)); // [ 'Darth Sidious' ]

// 6a
const starWarsMovies = [
  {
    episodeOne: "The Phantom Menace",
    episodeTwo: "Attack of the Clones",
    episodeThree: "Revenge of the Sith"
  },
  {
    episodeFour: "A New Hope",
    episodeFive: "The Empire Strikes Back",
    episodeSix: "Return of the Jedi"
  },
  {
    episodeSeven: "The Force Awakens",
    episodeEight: "The Last Jedi",
    episodeNine: "The Rise of Skywalker"
  }
];

// 6b
starWarsMovies.splice(1, 0, `Solo,`, `Rogue One`);
console.log(starWarsMovies);
// [
//   {
//     episodeOne: 'The Phantom Menace',
//     episodeTwo: 'Attack of the Clones',
//     episodeThree: 'Revenge of the Sith'
//   },
//   'Solo,',
//   'Rogue One',
//   {
//     episodeFour: 'A New Hope',
//     episodeFive: 'The Empire Strikes Back',
//     episodeSix: 'Return of the Jedi'
//   },
//   {
//     episodeSeven: 'The Force Awakens',
//     episodeEight: 'The Last Jedi',
//     episodeNine: 'The Rise of Skywalker'
//   }
// ]