// mongo-init.js - This will initialize your MongoDB with planet data
db = db.getSiblingDB('solarsystem');

// Create collections
db.createCollection('planets');

// Insert initial planet data that matches the test expectations
db.planets.insertMany([
    {
        name: 'Sun',
        id: 0,
        description: 'The Sun is the star at the center of the Solar System.',
        image: 'images/sun.png',
        velocity: 'N/A',
        distance: '0'
    },
    {
        name: 'Mercury',
        id: 1,
        description: 'Mercury is the smallest and innermost planet in the Solar System.',
        image: 'images/mercury.png',
        velocity: '47.87 km/s',
        distance: '57.9 million km'
    },
    {
        name: 'Venus',
        id: 2,
        description: 'Venus is the second planet from the Sun and is often called Earth\'s sister planet.',
        image: 'images/venus.png',
        velocity: '35.02 km/s',
        distance: '108.2 million km'
    },
    {
        name: 'Earth',
        id: 3,
        description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life.',
        image: 'images/earth.png',
        velocity: '29.78 km/s',
        distance: '149.6 million km'
    },
    {
        name: 'Mars',
        id: 4,
        description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.',
        image: 'images/mars.png',
        velocity: '24.13 km/s',
        distance: '227.9 million km'
    },
    {
        name: 'Jupiter',
        id: 5,
        description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System.',
        image: 'images/jupiter.png',
        velocity: '13.07 km/s',
        distance: '778.5 million km'
    },
    {
        name: 'Saturn',
        id: 6,
        description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System.',
        image: 'images/saturn.png',
        velocity: '9.69 km/s',
        distance: '1.434 billion km'
    },
    {
        name: 'Uranus',
        id: 7,
        description: 'Uranus is the seventh planet from the Sun and has the third-largest planetary radius in the Solar System.',
        image: 'images/uranus.png',
        velocity: '6.81 km/s',
        distance: '2.871 billion km'
    },
    {
        name: 'Neptune',
        id: 8,
        description: 'Neptune is the eighth planet from the Sun and the farthest known planet in the Solar System.',
        image: 'images/neptune.png',
        velocity: '5.43 km/s',
        distance: '4.495 billion km'
    },
    {
        name: 'Pluto',
        id: 9,
        description: 'Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune.',
        image: 'images/pluto.png',
        velocity: '4.74 km/s',
        distance: '5.906 billion km'
    }
]);