var gulp = require('gulp');
var csv2json = require('./csv2json');

gulp.task('generate_json', function() {
  gulp.src(['./data/*.csv'])
    .pipe(csv2json())
    .pipe(gulp.dest('./dist/data/'))
});
