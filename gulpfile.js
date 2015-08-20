var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sprity = require('sprity');

var sourcePaths = {
  styles: ['scss/**/*.scss']
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

gulp.task('watch', function() {
  gulp.watch(sourcePaths.styles, ['sass']);
});

gulp.task('build', ['sprites', 'sass']);

gulp.task('default', ['build', 'watch']);