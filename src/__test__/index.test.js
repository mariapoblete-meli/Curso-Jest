const randomString = require('../index');
const randomStrings = require('../index');



describe('Probar funcionalidades de randomStrings', () => {
    test('Probar la funcionalidad', () => {
        expect(typeof (randomString())).toBe('string');
    });
    test('Comprobar que no existe una ciudad', () => {
        expect(randomStrings()).not.toMatch(/Cordoba/);
    });
});