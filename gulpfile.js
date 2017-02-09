var gulp = require('gulp');
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

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
        './node_modules/moment/moment.js',
        './node_modules/bootstrap/dist/js/bootstrap.js'
    ]
};

//LIMPA A PASTA COM ARQUIVOS APÓS TASKS
gulp.task('clean', function(){
    return gulp.src('build/*')
    .pipe(clean());
});

//___________________________PRODUÇÃO
//MINIFICA O HTML
gulp.task('html-prod', function(){
    return gulp.src(appFiles.htmlfiles)
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest('build/html'));
});

//MINIFICA DEPENDENCIAS CSS
gulp.task('css-dependences-prod', function(){
    return gulp.src(appFiles.cssDependences)
    .pipe(cleanCSS())
    .pipe(concat('dependences.css'))
    .pipe(gulp.dest('build/css'));
});

//MINIFICA CSS
gulp.task('css-prod', function(){
    return gulp.src(appFiles.cssFiles)
    .pipe(cleanCSS())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('build/css'));
});

//MINIFICA DEPENDENCIAS JS
gulp.task('js-dependences-prod', function(){
    return gulp.src(appFiles.jsDependences)
    .pipe(uglify())
    .pipe(concat('dependences.js'))
    .pipe(gulp.dest('build/js'));
});

//MINIFICA JS
gulp.task('js-prod', function(){
    return gulp.src(appFiles.jsFiles)
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js'));
});

//RODA TODAS TASKS DE PRODUÇÃO
gulp.task('producao', ['html-prod', 'css-dependences-prod', 'css-prod', 'js-dependence-prod', 'js-prod']);


//___________________________DESENVOLVIMENTO
//MINIFICA DEPENDENCIAS CSS
gulp.task('html-dev', function(){
    return gulp.src(appFiles.htmlfiles)
    .pipe(gulp.dest('build/html'));
});

gulp.task('css-dependences-dev', function(){
    return gulp.src(appFiles.cssDependences)
    .pipe(concat('dependences.css'))
    .pipe(gulp.dest('build/css'));
});

//MINIFICA CSS
gulp.task('css-dev', function(){
    return gulp.src(appFiles.cssFiles)    
    .pipe(concat('style.css'))
    .pipe(gulp.dest('build/css'));
});

//MINIFICA DEPENDENCIAS JS
gulp.task('js-dependences-dev', function(){
    return gulp.src(appFiles.jsDependences)    
    .pipe(concat('dependences.js'))
    .pipe(gulp.dest('build/js'));
});

//MINIFICA JS
gulp.task('js-dev', function(){
    return gulp.src(appFiles.jsFiles)    
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js'));
});

//MONITORA MUDANÇAS NOS ARQUIVOS
gulp.task('watch', function(){
    gulp.watch(appFiles.htmlfiles, ['html-dev']);
    gulp.watch(appFiles.cssFiles, ['css-dev']);
    gulp.watch(appFiles.jsFiles, ['js-dev']);
});

//RODA TODAS TASKS DE DESENVOLVIMENTO
gulp.task('development', ['html-dev', 'css-dev','css-dependences-dev', 'js-dev', 'js-dependences-dev']);

gulp.task('default',['development', 'watch']);