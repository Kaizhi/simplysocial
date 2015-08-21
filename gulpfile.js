var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sprity = require('sprity');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

var sourcePaths = {
  styles: ['scss/**/*.scss'],
  react: ['components/**/*.js'],
  icons: ['icons/**/*.png']
};

var distPaths = {
  styles: 'public/css'
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
gulp.task('sass', function () {
  gulp.src( sourcePaths.styles )
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(gulp.dest( distPaths.styles ));
});

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('components/app.js');
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('watch', function() {
  gulp.watch(sourcePaths.styles, ['sass']);
  gulp.watch(sourcePaths.react, ['browserify']);
  gulp.watch(sourcePaths.icons, ['sprites']);
});

gulp.task('build', ['sprites', 'sass', 'browserify']);

gulp.task('default', ['build', 'watch']);