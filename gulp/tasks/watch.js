let { webpackWatch } = require('./webpack');
let gulp = require('gulp');

gulp.task('watch', gulp.series([
    'copy:watch',
    'pug:watch',
    'sprite:svg:watch',
    'svgo:watch',
    'list-pages:watch',
    webpackWatch,
    'sass:watch'
]));
