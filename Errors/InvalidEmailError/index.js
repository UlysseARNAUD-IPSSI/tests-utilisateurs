/**
 * Erreur adresse mail invalide
 * @class InvalidEmailError
 * @extends Error
 */
class InvalidEmailError extends Error {

    /**
     * Singleton
     * @returns {InvalidEmailError}
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
            Error.captureStackTrace(this, InvalidEmailError);
        }
        /**
         * Nom de la classe
         * @type {string}
         */
        this.name = 'InvalidEmailError';

        /**
         * Message de l'erreur
         * @type {string}
         */
        this.message = 'Adresse mail invalide.';

        /**
         * Date où l'erreur a été encourue
         * @type {Date}
         */
        this.date = new Date();
    }
}

module.exports = InvalidEmailError;
