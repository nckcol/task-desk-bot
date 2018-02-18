const Sequelize = require('sequelize');
const user = require('./models/user');
const task = require('./models/task');

module.exports = ({ host, database, username, password, port }) => {
  const sequelize = new Sequelize({
    host,
    database,
    username,
    password,
    port,
    dialect: 'postgres'
  });

  const User = sequelize.import('user', user);
  const Task = sequelize.import('task', task);

  User.hasMany(Task);
  Task.belongsTo(User);

  return {
    sequelize,
    models: {
      User,
      Task
    }
  };
};
