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
const sass = require('gulp-sass')(require('node-sass'))

function tarefasCss(callback){
    gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css','./vendor/owl/css/owl.css'])
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

function tarefasSass(cb){

    gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))

    cb()
}

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/**/*').on('change',process)
    gulp.watch('./src/**/*').on('change',reload)
    
})

function end(cb){
    console.log("Tarefas concluídas")
    return cb();
}

const process= series(tarefasHtml,tarefasSass, tarefasCss, tarefasJs, end)

exports.styles = tarefasCss
exports.scripts = tarefasJs
exports.image = tarefaImages
exports.sass = tarefasSass
exports.htmlmin = tarefasHtml
exports.default = process