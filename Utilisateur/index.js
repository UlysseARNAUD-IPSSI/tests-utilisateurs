const UtilisateurValidator = require('../Validators/Utilisateur');
const UtilisateurValidatorError = require('../Errors/UtilisateurValidatorError');

/**
 * @class Utilisateur
 */
class Utilisateur {

    /**
     * @constructor
     * @param params
     * @param params.email
     * @param params.nom
     * @param params.prenom
     * @param params.age
     */
    constructor(params) {

        const validator = new UtilisateurValidator(params);
        if (false === validator.isValid) {
            throw new UtilisateurValidatorError(validator.errors);
        }

        const {
            email,
            nom,
            prenom,
            age
        } = params;

        /**
         * Adresse mail
         * @type {string}
         */
        this.email = email;

        /**
         * Nom
         * @type {string}
         */
        this.nom = nom;

        /**
         * Prenom
         * @type {string}
         */
        this.prenom = prenom;

        /**
         * Age
         * @type {string}
         */
        this.age = age;

    }

}

module.exports = Utilisateur;
