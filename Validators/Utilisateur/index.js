const Utilisateur = require('../../Utilisateur');
const InvalidArgumentsError = require('../../Errors/InvalidArgumentsError');
const InvalidEmailError = require('../../Errors/InvalidEmailError');
const InvalidNomError = require('../../Errors/InvalidNomError');
const InvalidPrenomError = require('../../Errors/InvalidPrenomError');
const InvalidAgeError = require('../../Errors/InvalidAgeError');
const UtilisateurValidatorError = require('../../Errors/UtilisateurValidatorError');

class UtilisateurValidator {

    constructor(...params) {

        this.isValid = false;
        this.errors = [];

        const {email, nom, prenom, age} = params;

        if (undefined === email) {
            throw new InvalidArgumentsError('email');
        }

        if (undefined === nom) {
            throw new InvalidArgumentsError('nom');
        }

        if (undefined === prenom) {
            throw new InvalidArgumentsError('prenom');
        }

        if (undefined === age) {
            throw new InvalidArgumentsError('age');
        }

        const conditions = {
            'email': function (email) {
                return UtilisateurValidator.siPasVide(email)
                    && UtilisateurValidator.siEmailValide(email);
            }(email),
            'nom': function (nom) {
                return UtilisateurValidator.siPasVide(nom)
                    && UtilisateurValidator.siTailleValide(nom, 3, 64);
            }(nom),
            'prenom': function (prenom) {
                return UtilisateurValidator.siPasVide(prenom)
                    && UtilisateurValidator.siTailleValide(prenom, 3, 64);
            }(prenom),
            'age': function (age) {
                return UtilisateurValidator.siPasVide(age)
                    && 0 < age;
            }(age)
        };

        const errors = {
            'email': InvalidEmailError,
            'nom': InvalidNomError,
            'prenom': InvalidPrenomError,
            'age': InvalidAgeError
        };

        // On récupère les valeurs de chaque vérifications et on vérifie si un false est retourné.
        // Si oui on ajoute les erreurs dans une pile de messages.
        const _conditionsValues = Object.values(conditions);
        if (_conditionsValues.includes(false)) {
            for (let cursor in errors) {
                const error = errors[cursor];
                this.errors.push(error);
            }
            throw new UtilisateurValidatorError.singleton(this.errors);
        }

        this.isValid = true;

    }

    static siPasVide(valeur) {
        return false === [undefined, null, ''].includes(valeur);
    }

    static siEmailValide(valeur) {
        const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const verification = expression.test(valeur);
        return true === verification;
    }

    static siTailleValide(valeur, min, max) {
        const siMinimumValide = function () {
            return min <= valeur.length;
        }(valeur, min);
        const siMaximumValide = function () {
            return max >= valeur.length;
        }(valeur, max);
        return siMinimumValide && siMaximumValide;
    }

    get isValid() {
        return this.isValid;
    }

    set isValid(value) {
        if ([true, false].includes(value)) {
            this.isValid = value;
        }
    }

}
