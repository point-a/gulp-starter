let gulp = require('gulp');

let { copyWatch } = require('./copy');
let { pugWatch } = require('./pug');
let { spriteSvgWatch } = require('./sprite-svg/sprite-svg');
let { svgoWatch } = require('./svgo');
let { listPagesWatch } = require('./index/index-page');
let { webpackWatch } = require('./webpack');
let { sassWatch } = require('./sass');

// gulp.task('watch', gulp.series([
//     'copy:watch',
//     'pug:watch',
//     'sprite:svg:watch',
//     'svgo:watch',
//     'list-pages:watch',
//     webpackWatch,
//     'sass:watch'
// ]));

function watchTask(cb) {
  gulp.series([
    copyWatch,
    pugWatch,
    spriteSvgWatch,
    svgoWatch,
    listPagesWatch,
    webpackWatch,
    sassWatch
  ]);
  cb();
}

module.exports = {
  watchTask,
}