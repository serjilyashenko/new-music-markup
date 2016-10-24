var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    less = require('gulp-less'),
    path = {
        less: ['less/styles.less']
    };


gulp.task('default', function () {
    return gulp.src('less/styles.less')
        .pipe(less())
        //.pipe(minifyCss())
        .pipe(gulp.dest('styles'));
});
