"use strict"

// Gulpfile.js

var gulp = require('gulp'),
    cache = require('gulp-cache'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify');

gulp.task('codemirror-js', function () {
  return gulp.src([
    'lib/codemirror.js',
    'mode/css/css.js',
    'addon/edit/closebrackets.js',
    'addon/edit/matchbrackets.js',
    'addon/hint/css-hint.js',
    'addon/lint/lint.js',
    'addon/lint/css-lint.js',
    'addon/selection/active-line.js'
  ])
  .pipe(concat('codemirror-4.4.js'))
  .pipe(gulp.dest('../ThemeDB/js/codemirror'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('../ThemeDB/js/codemirror/'))
  .pipe(notify({message: "Building complete!"}));
});

gulp.task('codemirror-css', function () {
  return gulp.src([
    'lib/codemirror.css',
    'theme/ambiance.css',
    'addon/lint/lint.css',
    'addon/hint/show-hint.css'
  ])
  .pipe(concat('codemirror.css'))
  .pipe(autoprefixer('last 2 version'))
  .pipe(gulp.dest('../ThemeDB/css/codemirror'))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifycss())
  .pipe(gulp.dest('../ThemeDB/css/codemirror'));
});

gulp.task('codemirror', function () {
  gulp.start('codemirror-js', 'codemirror-css');
});

