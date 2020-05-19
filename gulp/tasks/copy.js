var gulp = require('gulp');
var config = require('../config.js');

// gulp.task('copy:fonts', function () {
//     return gulp
//         .src(config.src.fonts + '/*.{ttf,eot,woff,woff2}')
//         .pipe(gulp.dest(config.dest.fonts));
// });

// gulp.task('copy:data', function () {
//     return gulp
//         .src(config.src.data + '/**/*.*')
//         .pipe(gulp.dest(config.dest.data));
// });

// gulp.task('copy:lib', function () {
//     return gulp
//         .src(config.src.lib + '/**/*.*')
//         .pipe(gulp.dest(config.dest.lib));
// });

// gulp.task('copy:rootfiles', function () {
//     return gulp
//         .src(config.src.root + '/*.*')
//         .pipe(gulp.dest(config.dest.root));
// });

// gulp.task('copy:img', function () {
//     return gulp
//         .src([
//             config.src.img + '/**/*.{jpg,png,jpeg,svg,gif}',
//             '!' + config.src.img + '/svgo/**/*.*'
//         ])
//         .pipe(gulp.dest(config.dest.img));
// });

// gulp.task('copy', gulp.series([
// 		'copy:img',
// 		// 'copy:rootfiles',
// 		// 'copy:lib',
// 		// 'copy:data',
// 		'copy:fonts'
//   ]));

// gulp.task('copy:watch', function (cb) {
//   gulp.watch([config.src.img + '/*',config.src.fonts + '/*'], gulp.series(['copy']));
//   cb();
// });

function copyImg(cb) {
  gulp
    .src([
        config.src.img + '/**/*.{jpg,png,jpeg,svg,gif}',
        '!' + config.src.img + '/svgo/**/*.*'
    ])
    .pipe(gulp.dest(config.dest.img));
  cb();
}

function copyFonts(cb) {
  gulp
    .src(config.src.fonts + '/*.{ttf,eot,woff,woff2}')
    .pipe(gulp.dest(config.dest.fonts));
  cb()
}

function copyWatch(cb) {
  gulp.watch([config.src.img + '/*',config.src.fonts + '/*'], gulp.series(copy));
  cb();
}

function copy(cb) {
  gulp.series(
    copyImg,
    // 'copy:rootfiles',
    // 'copy:lib',
    // 'copy:data',
    copyFonts
  )();
  cb();
}

module.exports = {
  copy,
  copyWatch
}