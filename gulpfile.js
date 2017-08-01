var gulp = require('gulp');

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('sass', function () {
	return gulp.src('htdocs/sass/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('htdocs'));
});

gulp.task('concat', function() {

	gulp.src('htdocs/js/lib/*.js')
		.pipe(concat('lib.min.js'))
		.pipe(gulp.dest('htdocs/js/min'));

	return gulp.src('htdocs/js/*.js')
		.pipe(concat('script.min.js'))
		.pipe(gulp.dest('htdocs/js/min'));
});

gulp.task('compress', function() {
	return gulp.src('htdocs/js/min/script.min.js')
		.pipe(uglify())
		.pipe(gulp.dest('htdocs/js/min'));
});

gulp.task('watch', function() {
	watch('htdocs/sass/**/*.scss', function() {
		gulp.start('sass');
	});
	watch(['htdocs/js/*.js'], function() {
		gulp.start('concat', function() {
			gulp.start('compress', function() {

			}); 
		});
	});
});

gulp.task('default', function() {
	// place code for your default task here
});