module.exports = (sequelize, DataTypes) =>
  sequelize.define('user', {
    name: DataTypes.TEXT,
    telegram_id: DataTypes.STRING
  });
