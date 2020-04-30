// var gulp        = require('gulp');
var pug         = require('gulp-pug');
var plumber     = require('gulp-plumber');
var changed     = require('gulp-changed');
var gulpif      = require('gulp-if');
var frontMatter = require('gulp-front-matter');
var prettify    = require('gulp-prettify');
var config      = require('../config');

const { task, watch, src, dest, series } = require('gulp');

function renderHtml(onlyChanged) {
    return src([config.src.templates + '/[^_]*.pug'])
            .pipe(plumber({ errorHandler: config.errorHandler }))
            .pipe(gulpif(onlyChanged, changed(config.dest.html, { extension: '.html' })))
            .pipe(frontMatter({ property: 'data' }))
            .pipe(pug())
            .pipe(prettify({
                indent_size: 2,
                wrap_attributes: 'auto', // 'force'
                preserve_newlines: true,
                // unformatted: [],
                end_with_newline: true
            }))
            .pipe(dest(config.dest.html));
}

// gulp.task('pug', function() {
//     return renderHtml();
// });

task('pug:changed', function() {
    return renderHtml(true);
});

task('pug:watch', function(cb) {
    watch([config.src.templates + '/**/_*.pug'], series(['pug']));
    watch([config.src.templates + '/**/[^_]*.pug'], series(['pug:changed']));
    cb();
});


function pug() {
  return renderHtml();
}

exports.build = pug;
