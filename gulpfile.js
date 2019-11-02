const {src, dest, parallel} = require('gulp');
const pug = require('gulp-pug');
const scss = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

function html() {
    return src('pug/pages/*.pug')
        .pipe(pug())
        .pipe(dest('build'))
}

function css() {
    return src(
        [
            'node_modules/bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css',
            'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
            'node_modules/owl.carousel/dist/assets/owl.theme.default.css',
            'node_modules/@mdi/font/css/materialdesignicons.min.css',
            'scss/core.scss'
        ])
        .pipe(scss({"bundleExec": true}))
        .pipe(concat('core.css'))
        .pipe(minifyCSS())
        .pipe(dest('build/css'))
}

function js() {
    return src(
        [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/owl.carousel/dist/owl.carousel.min.js',
            'node_modules/popper.js/dist/umd/popper.min.js',
            'node_modules/bootstrap-v4-rtl/dist/js/bootstrap.min.js',
            'js/*.js',
        ])
        .pipe(concat('app.js'))
        .pipe(minify())
        .pipe(dest('build/js'))
}

function copyAssets() {
    return src(['assets/*/*.*'])
        .pipe(dest('build/assets'))
}


function copyMdi() {
    return src(['node_modules/@mdi/font/fonts/*.*'])
        .pipe(dest('build/fonts'))
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.default = parallel(html, css, js, copyAssets, copyMdi);
