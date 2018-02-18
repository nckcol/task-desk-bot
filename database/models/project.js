module.exports = (sequelize, DataTypes) =>
  sequelize.define('project', {
    name: DataTypes.TEXT
  });
