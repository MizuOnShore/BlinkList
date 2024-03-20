const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

// Concatenate and minify CSS files
gulp.task('css', function() {
    return gulp.src(['src/styles.css']) // Update source file path
        .pipe(concat('styles.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate and minify JavaScript files
gulp.task('js', function() {
    return gulp.src(['src/songs.js']) // Update source file path
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Default task
gulp.task('default', gulp.parallel('css', 'js'));
