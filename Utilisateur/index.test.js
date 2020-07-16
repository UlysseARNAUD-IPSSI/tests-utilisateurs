const Utilisateur = require('.');
jest.mock('.'); // Utilisateur est dorénavant un constructeur "mock"

beforeEach(() => {
    // On nettoie chaque instance, ainsi que les appels aux constructeurs et de ses méthodes.
    Utilisateur.mockClear();
});

it(`Vérifie si l'utilisateur a été appelé une fois`, function () {
    new Utilisateur({
        email: 'ulysse.arnaud@exemple.fr',
        nom: 'ARNAUD',
        prenom: 'Ulysse',
        age: 21
    });

    expect(Utilisateur).toHaveBeenCalledTimes(1);
});

it(`Vérifie si un utilisateur est créé avec de bons paramètres`, function () {
    const utilisateur = new Utilisateur({
        email: 'ulysse.arnaud@exemple.fr',
        nom: 'ARNAUD',
        prenom: 'Ulysse',
        age: 21
    });

    expect(utilisateur).toBeDefined();
});

it(`Vérifie si on obtient une erreur si on ne met pas d'arguments`, function () {
    const utilisateur = new Utilisateur({});

    console.log({utilisateur});

    expect(() => utilisateur).toThrow(); // TODO: Ajout du type d'erreur
});

it(`Vérifie si on obtient une erreur si on ne défini pas le nom`, function () {
    const utilisateur = () => new Utilisateur({
        email: 'ulysse.arnaud@exemple.fr',
        prenom: 'Ulysse',
        age: 21
    });

    expect(utilisateur).toThrow(); // TODO: Ajout du type d'erreur
});

it(`Vérifie si on obtient une erreur si on ne défini pas le prénom`, function () {
    const utilisateur = () => new Utilisateur({
        email: 'ulysse.arnaud@exemple.fr',
        nom: 'ARNAUD',
        age: 21
    });

    expect(utilisateur).toThrow(); // TODO: Ajout du type d'erreur
});


it(`Vérifie si on obtient une erreur si on l'adresse mail n'a pas le bon format`, function () {
    const utilisateur = () => new Utilisateur({
        email: 'ulysse.arnaud_at_exemple_dot_fr',
        prenom: 'Ulysse',
        nom: 'ARNAUD',
        age: 21
    });

    expect(utilisateur).toThrow(); // TODO: Ajout du type d'erreur
});


