var gulp = require('gulp');
var loader = require('gulp-load-plugins')();
// console.log(loader);
var data = JSON.stringify(require('./mock/mock.json'));
console.log(data);
gulp.task('sass', function() {
    gulp.watch('./src/scss/*.scss', function() {
        gulp.src('./src/scss/*.scss')
            .pipe(loader.sass())
            .pipe(gulp.dest('./src/css/'))
    })
})
gulp.task('server', function() {
    gulp.src('./src')
        .pipe(loader.webserver({
            port: 8000,
            open: true,
            middleware: function(req, res, next) {
                if (req.url == './favicon.ico') {
                    return;
                }
                var pathname = require('url').parse(req.url).pathname;
                if (pathname == '/api/ajaxList') {
                    res.end(data);
                }
            }
        }))
})

gulp.task('minjs', function() {
    gulp.src('./src/js/*.js')
        .pipe(loader.babel({
            presets: 'es2015'
        }))
        .pipe(loader.uglify())
        .pipe(gulp.dest('./bulid/js'))
})
gulp.task('mincss', function() {
    gulp.src('./src/css/*.css')
        .pipe(loader.cleanCss())
        .pipe(gulp.dest('./bulid/css'))
})