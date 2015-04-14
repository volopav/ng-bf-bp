var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    connect = require('gulp-connect'),
    stringify = require('stringify'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

var distDir = './dist',
    srcDir = './src',
    appEntryPoint = './src/main.js',
    jsBundleDir = distDir + '/js',
    cssBundleDir = distDir + '/css',
    sassSrc = ['./src/main.scss', './src/**/*.scss'];

gulp.task('server', ['build'], function () {
    connect.server({
        root: distDir,
        livereload: true,
        port: 18080
    });
});

gulp.task('clean', ['clean-css', 'clean-js'], function () {
    return gulp.src(distDir + '/*.*', { read: false })
        .pipe(clean());
});

gulp.task('clean-css', function () {
    return gulp.src(cssBundleDir, { read: false })
        .pipe(clean());
});

gulp.task('clean-js', function () {
    return gulp.src(jsBundleDir, { read: false })
        .pipe(clean());
});

gulp.task('scripts', ['clean-js'], function () {
    return gulp.src(appEntryPoint)
        .pipe(browserify({
            debug: true,
            paths: ['./node_modules', './src'],
            transform: stringify({
                extensions: ['.html']
            })
        }))
        .pipe(gulp.dest(jsBundleDir))
        .pipe(connect.reload());
});

gulp.task('copy-pages', function () {
    return gulp.src(srcDir + '/*.html')
        .pipe(gulp.dest(distDir))
        .pipe(connect.reload());
});

gulp.task('build', ['clean', 'scripts', 'copy-pages', 'sass']);

gulp.task('watch', ['server'], function () {
    gulp.watch(srcDir + '/**/*.js', ['scripts']);
    gulp.watch(srcDir + '/**/*.scss', ['sass']);
    gulp.watch(srcDir + '/*.html', ['copy-pages']);
});

gulp.task('sass', function () {
    return gulp.src(sassSrc)
        .pipe(concat('main.scss'))
        .pipe(sass())
        .pipe(gulp.dest(cssBundleDir))
        .pipe(connect.reload());
});