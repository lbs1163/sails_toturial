/**
 * QuoteController
 *
 * @description :: Server-side logic for managing quotes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getQuote: async function(req, res) {
        var quote = await sails.helpers.getRandomOne();
        return res.json({ quote: quote });
    },

    getProtectedQuote: async function(req, res) {
        var quote = await sails.helpers.getRandomOne();
        return res.json({ quote: quote });
    }
};