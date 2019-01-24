const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const gulpLess = require('gulp-less');
const gcmq = require('gulp-group-css-media-queries');
const browserSync = require('browser-sync');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

function styles() {
	return gulp.src('./app/less/**/*.less')
				.pipe(gulpLess())
				.pipe(gcmq())
				.pipe(autoprefixer({
            			browsers: ['last 2 versions'],
           				cascade: false
        		}))
        		.pipe(gulp.dest('./app/css'))
        		.pipe(cleanCSS({
        			level: 2
        		}))
        		.pipe(gulp.dest('./dist/css'))
        		.pipe(browserSync.stream());
}

function scripts() {
	return gulp.src([
                'app/libs/jquery-3.3.1.min.js',               
                'app/js/script.js'
                    ])
                .pipe(concat('libs.min.js'))
				.pipe(uglify())
				.pipe(gulp.dest('./dist/js'))
				.pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
	gulp.watch('./app/less/**/*.less', styles);
	gulp.watch('./app/js/**/*.js', scripts);
	gulp.watch('./dist/*.html').on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);