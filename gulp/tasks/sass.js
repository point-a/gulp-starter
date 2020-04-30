// var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker     = require('css-mqpacker');
var config       = require('../config');
var csso = require('postcss-csso');

const { task, watch, src, series, dest } = require('gulp');


var processors = [
    autoprefixer({
        browsers: ['last 4 versions'],
        cascade: false
    }),
    require('lost'),
    mqpacker({
        sort: sortMediaQueries
    }),
    csso
];

task('sass:watch', function(cb) {
  watch([config.src.sass + '/**/*.{sass,scss}'], series(['sass']));
  cb();
});

function isMax(mq) {
  return /max-width/.test(mq);
}

function isMin(mq) {
  return /min-width/.test(mq);
}

function sortMediaQueries(a, b) {
  const A = a.replace(/\D/g, '');
  const B = b.replace(/\D/g, '');

  if (isMax(a) && isMax(b)) {
      return B - A;
  } else if (isMin(a) && isMin(b)) {
      return A - B;
  } else if (isMax(a) && isMin(b)) {
      return 1;
  } else if (isMin(a) && isMax(b)) {
      return -1;
  }
}

async function sass(done) {
  src(config.src.sass + '/*.{sass,scss}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: config.production ? 'compact' : 'expanded', // nested, expanded, compact, compressed
      precision: 5
    }))
    .on('error', config.errorHandler)
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./'))
    .pipe(dest(config.dest.css));

  done();
}

exports.build = sass;
