const mockUtilisateur = jest.fn();
const mock = jest.fn().mockImplementation(function() {
    return {
        utilisateur: mockUtilisateur
    }
});

module.exports = mock;
