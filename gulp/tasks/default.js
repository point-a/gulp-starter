var gulp        = require('gulp');
var runSequence = require('gulp4-run-sequence');
var config      = require('../config');

var { buildTask, buildDevTask } = require('./build');
var { watchTask } = require('./watch');
var { serverTask } = require('./server');

// gulp.task('default', function(cb) {
//   runSequence(
//       'build:dev',
//       'watch',
//       'server',
//       cb
//   );
// });

// gulp.task('default', function(cb) {
//   runSequence(
//     buildDevTask,
//     watchTask,
//     serverTask,
//     cb
//   );
// });

function defaultTask(cb) {
  runSequence(
    buildDevTask,
    watchTask,
    serverTask,
    cb
  );
}

module.exports = {
  defaultTask
}
