var syntax        = 'sass'; // Syntax: sass or scss тут мы указываем какой синтаксис будем использовать;

var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		browsersync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require("gulp-notify"),
		rsync         = require('gulp-rsync');

gulp.task('browser-sync', function() {
	browsersync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		open: false, /*опция позволяет при инициализации "gulp" открывать вкладку с проектом в браузере*/
		// tunnel: true, /*опция позволяет создавать туннель ссылку для быстрой демонстрации проекта. Разкомментировать нужно обе и ту строчку, что ниже*/
		// tunnel: "projectname", //Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('styles', function() {
	return gulp.src('app/'+syntax+'/**/*.'+syntax+'')
	.pipe(sass({ outputStyle: 'expand' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	// .pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Сжимает Css закомментировать при отладке
	.pipe(gulp.dest('app/css'))
	.pipe(browsersync.reload( {stream: true} ))
});

gulp.task('js', function() {
	return gulp.src([
		'app/libs/modernizr/modernizr.js', /* https://modernizr.com/ */
		'app/libs/jquery/dist/jquery.min.js', /* http://jquery.com/download/ */
		'app/libs/popperjs/popper.min.js', /* Нужен для работы в паре с бутстрапом версии 4 */
		'app/libs/bootstrap/dist/js/bootstrap.min.js', /* https://getbootstrap.com/ */
		// 'app/libs/waypoints/waypoints.js', /* http://imakewebthings.com/waypoints/ */
		// 'app/libs/animate/animatecss.js', /*Для анимации https://daneden.github.io/animate.css работает вместе с waypoints.js*/
		// 'app/libs/CustomScrollbar/CustomScrollbar.js', /*Кастомизированный скроллбар http://manos.malihu.gr/jquery-custom-content-scroller */
		// 'app/libs/fancybox/dist/fancybox.js', /* Медиаплагин https://fancyapps.com/fancybox/3/ */
		// 'app/libs/inputmask/inputmask.js', /* https://igorescobar.github.io/jQuery-Mask-Plugin/docs.html */
		'app/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Сжимает js раскомментировать при отладке
	.pipe(gulp.dest('app/js'))
	.pipe(browsersync.reload({ stream: true }))
});

gulp.task('rsync', function() {
	return gulp.src('app/**')
	.pipe(rsync({
		root: 'app/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Includes files to deploy
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});

gulp.task('watch', ['styles', 'js', 'browser-sync'], function() {
	gulp.watch('app/'+syntax+'/**/*.'+syntax+'', ['styles']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/*.html', browsersync.reload)
});

gulp.task('default', ['watch']);
