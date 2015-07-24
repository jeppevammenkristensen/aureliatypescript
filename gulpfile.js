/*
  This file in the main entry point for defining Gulp tasks and using Gulp plugins.
  Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
'use strict';

var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

var jsSrc = ['./app.*{js,html}', './views/**/*.{js,html}'];


gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('copy', ['copy-root', 'copy-views']);

gulp.task('copy-root', function() {
    gulp.src(jsSrc[0])
        .pipe(gulp.dest('./wwwroot'));
});

gulp.task('copy-views', function() {
    gulp.src(jsSrc[1])
        .pipe(gulp.dest('./wwwroot/views'));
});

gulp.task('build-ts', function() {
    var tsResult = gulp.src(['./**/*.ts",!"./wwwroot/**'])
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest(''));
})
