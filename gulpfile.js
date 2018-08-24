var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
gulp.task('test',function(){
    gulp.src('./src/sass/*.scss').pipe(sass()).pipe(rename({suffix : '.main'})).pipe(gulp.dest('dist'));
    //.pipe(cssnano())
})