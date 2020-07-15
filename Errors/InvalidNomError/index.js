/**
 * Erreur nom invalide
 * @class InvalidNomError
 * @extends Error
 */
class InvalidNomError extends Error {

    /**
     * Singleton
     * @returns {InvalidNomError}
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
            Error.captureStackTrace(this, InvalidNomError);
        }
        /**
         * Nom de la classe
         * @type {string}
         */
        this.name = 'InvalidNomError';

        /**
         * Message de l'erreur
         * @type {string}
         */
        this.message = 'Nom invalide.';

        /**
         * Date où l'erreur a été encourue
         * @type {Date}
         */
        this.date = new Date();
    }
}

module.exports = InvalidNomError;
