
const Utilisateur = require('./Utilisateur');

const utilisateur = new Utilisateur({
    email: 'ulysse.arnaud_dzt_exemple.fr',
    nom: 'ARNAUD',
    prenom: 'Ulysse',
    age: 21
});

console.log({utilisateur});
