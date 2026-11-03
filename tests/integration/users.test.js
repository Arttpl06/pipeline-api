import app from '../../app.js';
import request from 'supertest';
import pool from '../../src/database/conection.js';

describe('Teste de rotas', () => {

    test('Resposta', async () => {
        const response = await request(app).get('/users');

        expect(response.body).toContainEqual(
            expect.objectContaining({
                name: 'Joao Silva',
                email: 'joao@email.com'
}));
    });

    test('Status', async () => {
        const response = await request(app).get('/users');

        expect(response.statusCode).toBe(200);
    });

    afterAll(async () => {
        await pool.end();
    });

});