'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha')
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('default', ['test'], function() {});

gulp.task('test', function() {
  return gulp
    .src('test/*.js')
    .pipe(mocha());
});

gulp.task('lint', function() {
  return gulp
    .src(['lib/**/*.js', 'test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('watch', function() {
  gulp.watch(['!./gulpfile.js', 'lib/**/*.js', './*.js'], ['lint']);
});
