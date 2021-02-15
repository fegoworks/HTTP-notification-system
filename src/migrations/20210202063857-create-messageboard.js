module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('messageboards', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      unique: true,
    },
    server: {
      type: Sequelize.STRING,
      required: true
    },
    topic: {
      type: Sequelize.STRING,
      required: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('messageboards')
};