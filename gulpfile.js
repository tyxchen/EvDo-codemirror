"use strict"

// Gulpfile.js

var gulp = require('gulp'),
    cache = require('gulp-cache'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify');

gulp.task('codemirror', function () {
  return gulp.src([
    'lib/codemirror.js',
    'mode/css/css.js',
    'edit/closebrackets.js',
    'edit/matchbrackets.js',
    'hint/css-hint.js',
    'lint/lint.js',
    'lint/css-lint.js',
    'selection/active-line.js'
  ])
  .pipe(concat('codemirror-4.4.js'))
  .pipe(gulp.dest('../ThemeDB/js/codemirror'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('../ThemeDB/js/codemirror/'))
  .pipe(notify({message: "Building complete!"}));
});

