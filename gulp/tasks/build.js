var gulp = require('gulp'),
useref = require('gulp-useref'),
uglify = require('gulp-uglify'),
gulpIf = require('gulp-if'),
imageMin = require('gulp-imagemin'),
cssNano = require('gulp-cssnano'),
cache = require('gulp-cache'),
del = require('del'),
runSequence = require('run-sequence');



gulp.task('useref', function(){
	console.log("running useref");
	return gulp.src('app/*.html')
	.pipe(useref())
	.pipe(gulpIf('*,.js', uglify()))
	.pipe(gulpIf('*.css', cssNano()))
	.pipe(gulp.dest('dist'))
});


gulp.task('imageMin', function(){
	console.log("Optimizing Images");
	return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
	.pipe(cache(imageMin({
		interlaced:true
	})))
	.pipe(gulp.dest('dist/images'))
});


gulp.task('fonts', function(){
	console.log("Moving fonts");
	return gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))
});


gulp.task('clean:dist', function(){
	console.log("Deleting Old files");
	return del.sync('dist');
});


gulp.task('build', function(callback){
	console.log("Building assets");
	runSequence('clean:dist',
		['useref', 'imageMin', 'fonts'],
		callback);
});