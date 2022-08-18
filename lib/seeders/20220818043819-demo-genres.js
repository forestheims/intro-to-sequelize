'use strict';

module.exports = {
  async up (queryInterface) {

    await queryInterface.bulkInsert('Genres', [{
      name: 'This',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'That',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'The Other',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Other',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Otter',
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
