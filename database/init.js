const user = require('./models/user');
const task = require('./models/task');
const project = require('./models/project');

module.exports = ({ database, username, password, port }) => {
  const sequelize = new Sequelize({
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
    models: { User, Task, Project }
  };
};
