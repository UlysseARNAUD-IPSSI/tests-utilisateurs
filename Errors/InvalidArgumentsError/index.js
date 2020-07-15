/**
 * Erreur arguments invalides
 * @class InvalidArgumentsError
 * @extends Error
 */
class InvalidArgumentsError extends Error {

    /**
     * Singleton
     * @returns {InvalidArgumentsError}
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
            Error.captureStackTrace(this, InvalidArgumentsError);
        }
        /**
         * Nom de la classe
         * @type {string}
         */
        this.name = 'InvalidArgumentsError';

        /**
         * Message de l'erreur
         * @type {string}
         */
        this.message = 'Arguments invalides.';

        /**
         * Date où l'erreur a été encourue
         * @type {Date}
         */
        this.date = new Date();
    }
}

module.exports = InvalidArgumentsError;
