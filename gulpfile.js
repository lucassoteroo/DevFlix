const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const image = require('gulp-image')

function tarefasCSS() {
    return gulp.src([
            './node_modules/@fortawesome/fontawesome-free/css/all.css',
            './src/Owl/css/owl.carousel.min.css',
            './src/Owl/css/owl.theme.default.min.css',
            './src/css/style.css'
        ])
        .pipe(concat('style.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'))
}

function tarefasJSindex() {
    return gulp.src([
            './node_modules/@fortawesome/fontawesome-free/js/all.js',
            './node_modules/jquery/dist/jquery.js',
            './src/Owl/js/owl.carousel.min.js',
            './src/js/custom-carrosel.js'
        ])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'))
}

function tarefasJSlogin() {
    return gulp.src([
            './node_modules/jquery/dist/jquery.js',
            './src/js/custom-login.js'
        ])
        .pipe(concat('script-login.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'))
}

function tarefasImagens() {
    return gulp.src('./src/img/*')
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

exports.style = tarefasCSS
exports.scriptIndex = tarefasJSindex
exports.scriptLogin = tarefasJSlogin
exports.image = tarefasImagens