module.exports = (sequelize, DataTypes) =>
  sequelize.define('user', {
    id: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    telegram_id: DataTypes.STRING
  });
