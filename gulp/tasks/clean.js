var del    = require('del');
var util   = require('gulp-util');
var config = require('../config');

function clean() {
  return del([
    config.dest.root
  ]).then(function(paths) {
    util.log('Deleted:', util.colors.magenta(paths.join('\n')));
  });
}

module.exports = { 
  clean
};
