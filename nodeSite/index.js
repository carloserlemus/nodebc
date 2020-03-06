//Add Server

const express = require('express');
const app = express()
port = 3000

// Configures express to use pug
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {});
  });

//User Static folder
app.use(express.static('public'));

//Super Hero Array

app.get('/', (req, res) => {
  const superheroes = [
    { name: 'SPIDER-MAN', image: 'spiderman.jpg' },
    { name: 'CAPTAIN MARVEL', image: 'captainmarvel.jpg' },
    { name: 'HULK', image: 'hulk.jpg' },
    { name: 'THOR', image: 'thor.jpg' },
    { name: 'IRON MAN', image: 'ironman.jpg' },
    { name: 'DAREDEVIL', image: 'daredevil.jpg' },
    { name: 'BLACK WIDOW', image: 'blackwidow.jpg' },
    { name: 'CAPTAIN AMERICA', image: 'captanamerica.jpg' },
    { name: 'WOLVERINE', image: 'wolverine.jpg' },
  ];

  res.render('index', {});
});

// Error message
app.listen(port, (err) => {
    if (err){
        console.log('NOT COOOOL')
    } else {
        console.log('Smooth sailing')
    }
})