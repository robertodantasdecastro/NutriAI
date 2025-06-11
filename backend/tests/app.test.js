const request = require('supertest');
const app = require('../src/app');

describe('GET /api/meals', () => {
  it('responds with json', async () => {
    const res = await request(app).get('/api/meals');
    expect(res.statusCode).toBe(200);
  });
});
