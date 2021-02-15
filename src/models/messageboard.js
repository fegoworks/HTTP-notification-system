module.exports = (sequelize, DataTypes) => {
  const messageboard = sequelize.define('messageboard', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      required: true,
      primaryKey: true
    },
    server: {
      type: DataTypes.STRING,
      required: true,
    },
    topic: {
      type: DataTypes.STRING,
      required: true,
    }
  }, {});
  return messageboard;
};