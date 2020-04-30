var gulp        = require('gulp');
var runSequence = require('gulp4-run-sequence');
var config      = require('../config');

let { clean } = require('./clean');
let { spriteSvg } = require('./sprite-svg/sprite-svg');
let { svgo } = require('./svgo');
let { sass } = require('./sass');
let { pug } = require('./pug');
let { webpack } = require('./webpack');
let { copy } = require('./copy');
let { listPages } = require('./index/index-page');

function build(cb) {
  runSequence(
    clean,
    spriteSvg,
    svgo,
    sass,
    // pug,
    // webpack,
    // copy,
    // listPages,
    cb
  );
}

gulp.task('build', function(cb) {
  config.setEnv('production');
  config.logEnv();
  build(cb);
});

gulp.task('build:dev', function(cb) {
  config.setEnv('development');
  config.logEnv();
  build(cb);
});