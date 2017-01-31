//MODULOS
var gulp = require('gulp');
var clean = require('gulp-clean');
var newer = require('gulp-newer');
var htmlclean = require('gulp-htmlclean');
var concat = require('gulp-concat');
var stripdebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var browserSync = require('browserSync');

// PASTAS
var folder = {
	src: 'src/',
	build: 'build/'
};

var dependences = {
	appJS:[
		'node_modules/jquery/dist/jquery.min.js',		
		folder.src + 'js/**/*'
	]
};


//TAREFAS

//APAGA ARQUIVOS PASTA BUILD
gulp.task('clean', function () {
	return gulp.src('build/*')
	.pipe(clean());
});


//TAREFAS HTML
gulp.task('html', function () {
	var out = folder.build + 'html/';
	var page = gulp.src(folder.src + 'html/**/*')
	.pipe(newer(out));
	
	// PAGE = PAGE.PIPE(HTMLCLEAN());

	return page.pipe(gulp.dest(out));
});


//TAREFAS JS
gulp.task('js', function(){
	var jsbuild = gulp.src(dependences.appJS)
	.pipe(concat('main.js'));

	//.pipe(stripdebug())
	//.pipe(uglify());

  	return jsbuild.pipe(gulp.dest(folder.build + 'js/'));
});


//MONITORA MUDANÇAS
gulp.task('watch', function(){

	// MUDANÇAS NO HTML
	gulp.watch(folder.src + 'html/**/*', ['html']);

	// MUDANÇAS NO JAVASCRIPT
	gulp.watch(dependences.appJS, ['js']);	
});

//ATUALIZA NAVEGADOR
gulp.task('browserSync', function(){
  browserSync.init({
        server: {
            baseDir: "./"
        },
        files:[folder.src]
    });    
});

//TODAS TAREFAS JUNTAS
gulp.task('run', ['html', 'js', 'browserSync']);	

//TAREFA PADRAO
gulp.task('default', ['run', 'watch']);	