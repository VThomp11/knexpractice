const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')["development"]);

app.get('/', (request, response) => {
    response.send('Application up and running');
});

app.listen(port, (error) => {
    if (error) {
        console.error('Error starting the server:', error);
    } else {
        console.log('Your knex and express are running successfully');
    }
});

app.get('/pets', (request, response) => {
    knex('pet')
        .select('*')
        .then(pets => {
            var petNames = pets.map(pet => pet.name);
            response.json(petNames);
        })
        .catch(error => {
            console.error('Error fetching pets:', error);
            response.status(500).send('Internal Server Error');
        });
});