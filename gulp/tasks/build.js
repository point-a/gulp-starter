var gulp        = require('gulp');
var runSequence = require('gulp4-run-sequence');
var config      = require('../config');

let { clean } = require('./clean');
let { spriteSvg } = require('./sprite-svg/sprite-svg');
let { svgo } = require('./svgo');
let { sassTask } = require('./sass');
let { pugTask } = require('./pug');
let { webpackTask } = require('./webpack');
let { copy } = require('./copy');
let { listPages } = require('./index/index-page');

function build(cb) {
  runSequence(
    clean,
    spriteSvg,
    svgo,
    sassTask,
    pugTask,
    webpackTask,
    copy,
    listPages,
    cb
  );
}

// gulp.task('build', function(cb) {
//   config.setEnv('production');
//   config.logEnv();
//   build(cb);
// });

// gulp.task('build:dev', function(cb) {
//   config.setEnv('development');
//   config.logEnv();
//   build(cb);
// });

function buildTask(cb) {
  config.setEnv('production');
  config.logEnv();
  build(cb);
}

function buildDevTask(cb) {
  config.setEnv('development');
  config.logEnv();
  build(cb);
}

module.exports = {
  buildTask,
  buildDevTask
}