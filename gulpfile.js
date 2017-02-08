var gulp = require('gulp');
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var appFiles = {
    htmlfiles:[
    
    ],
    cssFiles:[
    
    ],
    jsFiles: [
               
    ]
};

gulp.task('clean', function(){
    return gulp.src('src/*')
    .pipe(clean());
});

gulp.task('js', function(){
    
});



gulp.watch(appFiles.htmlfiles, ['']);

gulp.task('default',[]);