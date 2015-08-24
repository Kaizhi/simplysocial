var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sprity = require('sprity');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var buffer = require('vinyl-buffer');
var reactify = require('reactify');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');

var sourcePaths = {
  styles: ['scss/**/*.scss'],
  react: ['components/**/*.js'],
  icons: ['icons/**/*.png']
};

var distPaths = {
  styles: 'public/css/'
};


// generate sprite.png and _sprite.scss
gulp.task('sprites', function () {
  return sprity.src({
    src: 'icons/**/*.{png,jpg}',
    style: '_sprites.scss',
    cssPath: '../img/',
    processor: 'sass',
    'dimension': [{
      ratio: 1, dpi: 72
    }, {
      ratio: 2, dpi: 192
    }],
  })
  .pipe(gulpif('*.png', gulp.dest('public/img/'), gulp.dest('scss/')));
});

// Compile scss files to css
gulp.task('sass', ['sprites'], function () {
  gulp.src( sourcePaths.styles )
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest( distPaths.styles ));
});

gulp.task('sass-min', ['sprites'], function () {
  gulp.src( sourcePaths.styles )
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest( distPaths.styles ));
});

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('components/app.js');
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('public/js/'));
});

gulp.task('compress', ['browserify'], function() {
  return gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js/'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch(sourcePaths.styles, ['sass']);
  gulp.watch(sourcePaths.react, ['browserify']);
  gulp.watch(sourcePaths.icons, ['sprites']);
});

gulp.task('build', ['sass', 'browserify']);

gulp.task('default', ['watch']);

gulp.task('prod', ['compress', 'sass-min']);