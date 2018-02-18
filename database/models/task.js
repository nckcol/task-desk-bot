module.exports = (sequelize, DataTypes) =>
  sequelize.define('task', {
    id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });
