const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('movie routes', () => {
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
        {
          name: 'another genre',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'another genre',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);

      await db.Movie.bulkCreate([
        {
          title: 'this movie',
          Genre: { name: expect.any(String) },
          description: 'more strings',
          image: 'https://randomfox.ca/?i=112',
          releaseYear: 2345,
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'another movie',
          Genre: { name: expect.any(String) },
          description: 'more strings',
          image: 'https://randomfox.ca/?i=113',
          releaseYear: 2345,
          genre_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'a movie',
          Genre: { name: expect.any(String) },
          description: 'more strings',
          image: 'https://randomfox.ca/?i=111',
          releaseYear: 2345,
          genre_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
    } catch (e) {
      throw new Error(e);
    }
  });
  afterAll(async () => {
    await db.sequelize.close();
  });

  it('#GET /api/v1/movies should return a list of movies', async () => {
    const resp = await request(app).get('/api/v1/movies');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(3);
  });

});
