const init = require('/init.js');

module.exports = properties => {
  return async (context, next) => {
    context.db = init(properties);
    await next();
  };
};
