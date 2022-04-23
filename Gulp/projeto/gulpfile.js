const { series, parallel} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')
const babel = require('gulp-babel')
const htmlmin = require('gulp-htmlmin')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

function tarefasCss(callback){
    gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css', './src/css/style.css', './vendor/owl/css/owl.css'])
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))

    return callback()
}

function tarefasJs(callback){
    gulp.src(['./src/js/**/*.js'])
        // .pipe(babel({
        //     comments: false,
        //     presets: ['@babel/env']
        // }))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))

        return callback()
}

function tarefaImages(){
    return gulp.src('./src/imagens/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}

function tarefasHtml(callback){

    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))

    return callback()
}

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./dist/**/*').on('change',reload)
})

exports.default = parallel(tarefasHtml, tarefasCss, tarefasJs)
exports.styles = tarefasCss
exports.scripts = tarefasJs
exports.image = tarefaImages