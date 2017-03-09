var gulp = require('gulp');
var webpack = require('webpack-stream');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var connect = require('gulp-connect');
var copy = require('gulp-copy');

// Run webpack
gulp.task('webpack', function () {
  return gulp.src('src/main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/js/'))
    .pipe(connect.reload());
});

// Run the webserver
gulp.task('webserver', function () {
  connect.server({
    port: 3000,
    livereload: true,
    root: 'dist'
  });
});

gulp.task('copy.images', function () {
  return gulp.src('./images/*')
    .pipe(gulp.dest('./dist/images'));
});


gulp.task('build.manifest', function () {
  return gulp.src('./src/manifest.json')
    .pipe(gulp.dest('./dist'));
});

// Copy index.html file
gulp.task('build.index', function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('package', ['webpack', 'copy.images', 'build.manifest', 'build.index']);
// Default task
gulp.task('default', ['webpack', 'webserver', 'copy.images', 'build.manifest', 'build.index']);
