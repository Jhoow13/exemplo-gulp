var gulp = require('gulp');
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var appFiles = {
    htmlfiles:[
        './src/html/**/**/*.html'
    ],
    cssFiles:[
        './src/css/**/**/*.css'
    ],
    cssDependences:[
        './node_modules/bootstrap/dist/css/bootstrap.css'
    ],
    jsFiles: [
        './src/js/**/**/*.js'
    ],
    jsDependences:[
        './node_modules/jquery/dist/jquery.js',
        './node_modules/moment/moment.js'
    ]
};

gulp.task('clean', function(){
    return gulp.src('build/*')
    .pipe(clean());
});

gulp.task('js', function(){
    
});



gulp.watch(appFiles.htmlfiles, ['']);

gulp.task('default',[]);