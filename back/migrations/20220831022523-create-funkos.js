'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Funkos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      serialNumber: {
        type: Sequelize.STRING
      },
      collection: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING

      
      },

   
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Funkos');
  }
};