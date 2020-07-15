
const UtilisateurValidator = require('../Validators/Utilisateur');
const UtilisateurValidatorError = require('../Errors/UtilisateurValidatorError');

class Utilisateur {

    constructor (...params) {

        const validator = new UtilisateurValidator(params);
        if (false === validator.isValid) {
            throw new UtilisateurValidatorError(validator.errors);
        }

        const {email, nom, prenom, age} = params;

        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;

    }

}

module.exports = Utilisateur;
