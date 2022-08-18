'use strict';

module.exports = {
  async up (queryInterface) {

    await queryInterface.bulkInsert('Movies', [{
      title: 'This',
      description: 'this did it',
      image: 'https://randomfox.ca/?i=110',
      releaseYear: 1234,
      genre_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'That',
      description: 'this did it',
      image: 'https://randomfox.ca/?i=113',
      releaseYear: 1234,
      genre_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'The Other',
      description: 'not this one',
      image: 'https://randomfox.ca/?i=112',
      releaseYear: 1234,
      genre_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Other',
      description: 'other than a description',
      image: 'https://randomfox.ca/?i=111',
      releaseYear: 1234,
      genre_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Otter',
      description: 'strings are strings',
      image: 'https://randomfox.ca/?i=109',
      releaseYear: 1234,
      genre_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});

  },

  async down () {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
