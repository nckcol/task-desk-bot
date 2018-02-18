const Sequelize = require('sequelize');
const user = require('./models/user');
const task = require('./models/task');
const project = require('./models/project');

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
  const Project = sequelize.import('project', project);

  User.hasMany(Task);
  Task.belongsTo(User);
  Project.hasMany(Task);
  Task.belongsTo(Project);

  return {
    sequelize,
<<<<<<< HEAD
    models: {
      User,
      Task
    }
=======
    models: { User, Task, Project }
>>>>>>> e801206e589e06df9f5f5e65ba5f51d71dd72ee5
  };
};
