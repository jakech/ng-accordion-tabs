var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('default', function() {
  gulp.src('src/ngAccordionTabs.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist'));
});
