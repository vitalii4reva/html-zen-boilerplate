const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const config = require('../config');
const csso = require('postcss-csso');
const concat = require('gulp-concat');

const processors = [
  autoprefixer({
    browsers: ['last 4 versions'],
    cascade: false
  }),
  csso
];

gulp.task('styles', function () {
  return gulp
    .src(config.src.sass + '/*.{sass,scss}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: config.production ? 'compact' : 'expanded',
      precision: 5
    }))
    .on('error', config.errorHandler)
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest.css));
});

gulp.task('styles:watch', function () {
  gulp.watch(config.src.sass + '/**/*.{sass,scss}', ['styles']);
});
