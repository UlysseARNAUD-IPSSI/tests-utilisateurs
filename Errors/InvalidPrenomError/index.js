/**
 * Erreur prenom invalide
 * @class InvalidPrenomError
 * @extends Error
 */
class InvalidPrenomError extends Error {

    /**
     * Singleton
     * @returns {InvalidPrenomError}
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
            Error.captureStackTrace(this, InvalidPrenomError);
        }
        /**
         * Nom de la classe
         * @type {string}
         */
        this.name = 'InvalidPrenomError';

        /**
         * Message de l'erreur
         * @type {string}
         */
        this.message = 'Prenom invalide.';

        /**
         * Date où l'erreur a été encourue
         * @type {Date}
         */
        this.date = new Date();
    }
}

module.exports = InvalidPrenomError;
