const gulp = require('gulp')
const rename = require('gulp-rename')
const cssmin = require('gulp-cssmin')



function cssMin(){
    return gulp.src(['dist/css/style.css'])
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
}


exports.style = cssMin

