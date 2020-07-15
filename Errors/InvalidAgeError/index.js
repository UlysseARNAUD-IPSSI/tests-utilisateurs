/**
 * Erreur age invalide
 * @class InvalidPrenomError
 * @extends Error
 */
class InvalidAgeError extends Error {

    /**
     * Singleton
     * @returns {InvalidAgeError}
     */
    static singleton() {
        return new this;
    }

    /**
     * @constructor
     * @param params
     */
    constructor(...params) {
        super(...params);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidAgeError);
        }
        /**
         * Nom de la classe
         * @type {string}
         */
        this.name = 'InvalidAgeError';

        /**
         * Message de l'erreur
         * @type {string}
         */
        this.message = 'Age invalide.';

        /**
         * Date où l'erreur a été encourue
         * @type {Date}
         */
        this.date = new Date();
    }
}

module.exports = InvalidAgeError;
