//Dependencies
const express = require('express');

//instantiate express... set us up the server!
const app = express()
const port = 3000;

//tell express to use the static public folder:
app.use(express.static('public'));

// configure express to use pug template engine.
app.set('view engine', 'pug');

//Global Array
const superheroes = [
    { id: 1, name: 'BLACK WIDOW', image: 'black_widow.jpg' },
    { id: 2, name: 'CAPTAIN AMERICA', image: 'captain_america.jpg' },
    { id: 3, name: 'CAPTAIN MARVEL', image: 'captain_marvel.jpg' },
    { id: 4, name: 'DAREDEVIL', image: 'dare_devil.jpg' }
];

//First Page User Sees.
app.get('/', (req, res) => {
    const indexVariables = {
        pageTitle: "First page of our app",
        superheroes: superheroes
    }
    res.render('index', { variables: indexVariables });
});

app.get('/superheroes/:id', (req, res) => {
    //store the id in a const variable.
    const selectedId = req.params.id;


    let selectedSuperhero = superheroes.filter(superhero => {
        return superhero.id === parseInt(selectedId);
    });

    selectedSuperhero = selectedSuperhero[0]
    
    res.render('superheroes', { superheroes: selectedSuperhero })
})

//root GET route handler: when the user accesses the main route the server is rendering the index
//file in the views folder.
app.get('/', (req, res) => {
    res.render('index', {}) //render method renders a 'view' and sends it to the user.
    /* res.render(view [, locals] [, callback])
    view: string referencing the .pug file in /views
    locals: object with properties that define the local variables for the view.
        ex.?
    callback: if this is provided it returns the possible error and rendered string (like the first param in
        render.)
    */
});


//what is the listen method?
app.listen(port, (err) => {
    if (err){
        console.log('something bad happened!')
    } else {
        console.log('smooth sailing.')
    }
})
