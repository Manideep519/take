var gulp = require('gulp'),
browserSync = require('browser-sync').create(),
postcss = require('gulp-postcss'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
autoPreFixer = require('autoprefixer'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
runSequence = require('run-sequence');



gulp.task('css', function(){
	 return gulp.src('app/css/styles.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, autoPreFixer]))
	.on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('app/temp/styles'))
	.pipe(browserSync.reload({
		stream:true
	}))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
    notify:false
  })
});



gulp.task('watch',['browserSync', 'css'], function(){
	console.log("running watching");
	gulp.watch('app/css/**/*.css', ['css'])
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});


gulp.task('default', function(callback){
	console.log("stating Development");
	runSequence('css',['browserSync', 'watch'],
	callback);
});





