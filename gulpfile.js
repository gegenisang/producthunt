var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var browserSync = require("browser-sync").create();


var paths = {
  src = 'src',
  js = 'src/js',
  sass = 'src/sass',
  dist = 'dist'
};

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: paths.dist
    },
  });
});

gulp.task("img", function () {
  return gulp.src(paths.src + "/img/**/*")
    .pipe(gulp.dest(paths.dist + "/img"));
});

gulp.task('lib', function () {
  return gulp.src("bower_components/**/*")
    .pipe(gulp.dest(paths.dist + "/bower_components"));
});

gulp.task("sass", function () {
  return gulp.src(paths.sass + "/**/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.dist + "/css"));
});

gulp.task("js", function () {
  return gulp.src(paths.js + "/**/*.js")
    .pipe(gukp.dest(paths.dist + "/js"));
});