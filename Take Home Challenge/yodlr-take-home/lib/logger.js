var winston = require('winston');

var transport = new winston.transports.Console({
  json: false,
  colorize: true
});

var api = module.exports = function init(app) {
  var logger = new winston.Logger({
    transports: [transport]
  });

  if (app) {
    app.use(function (req, res, next) {
      logger.info(req.method + ' ' + req.url);
      next();
    });
  }

  return logger;
};