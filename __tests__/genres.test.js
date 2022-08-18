const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('genre routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
    try {
      await db.Genre.bulkCreate([
        {
          name: 'a genre',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'another genre',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  });
  afterAll(async () => {
    await db.sequelize.close();
  });

  it('#GET /api/v1/genres should return a list of genres', async () => {
    const resp = await request(app).get('/api/v1/genres');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(2);
  });

  it('#GET /api/v1/genres/:id should return the genre with nested movies', async () => {
    const resp = await request(app).get('/api/v1/genres/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      name: 'another genre',
      id: 2,
      Movies: expect.any(Array),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });


});
