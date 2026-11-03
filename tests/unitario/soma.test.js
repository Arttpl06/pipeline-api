import soma from '../../src/utils/math.js';


describe('Função soma', () => {
    test('deve somar dois números', () => {
        expect(soma(2, 3)).toBe(5);
    });
});
