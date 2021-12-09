const { src, dest, parallel, series, watch } = require('gulp')
const browserSync  = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS     = require('gulp-clean-css')
const imagemin     = require('gulp-imagemin')
const htmlmin      = require('gulp-htmlmin')
const rename       = require('gulp-rename')
const concat       = require('gulp-concat')
const uglify       = require('gulp-uglify-es').default
const newer        = require('gulp-newer')
const scss         = require('gulp-sass')
const del          = require('del')


const server = () => {
	browserSync.init({
		server: {
			baseDir: 'dist/'
		},
		notify: false,
		online: false
	})

	watch('src/**/*.html').on('change', browserSync.reload)
	
	
}

const html = () => {
	return src('src/*.html')
	.pipe(htmlmin({
		collapseWhitespace: true
	}))
	.pipe(dest('dist'))
	.pipe(browserSync.stream());
}

const scripts = () => {
	return src([
		'src/js/**.js'
	])
	.pipe(concat('table.js'))
	.pipe(uglify())
	.pipe(dest('dist/js'))
	.pipe(browserSync.stream())
}

const styles = () => {
	return src('src/scss/main.scss')
	.pipe(scss())
	.pipe(rename('style.min.css'))
	.pipe(autoprefixer({
		overrideBrowserslist: ['last 10 versions'],
		grid: true
	}))
	.pipe(cleanCSS(({ level: { 1: { specialComments: 0 } } })))
	.pipe(dest('dist/css'))
	.pipe(browserSync.stream())	
}

const images = () => {
	return src('src/assets/img/**/*')
	.pipe(newer('dist/assets/img'))
	.pipe(imagemin())
	.pipe(dest('dist/assets/img'))
	.pipe(browserSync.stream())
} 

const cleanimg = () => {
	return del('dist/assets/img/**/*', { force: true })
}

const icons = () => {
	return src('src/assets/icons/**/*')
	.pipe(dest('dist/assets/icons'))
	.pipe(browserSync.stream())
}

const fonts = () => {
	return src('src/assets/fonts/**/*')
	.pipe(dest('dist/assets/fonts'))
	.pipe(browserSync.stream())
}

const cleanscss = () => {
	return del('src/scss/*.css');
}

const watcher = () => {
	watch('src/*.html').on('change', parallel(html))
	watch('src/scss/**/*.+(scss|sass|css)', series(styles, cleanscss))
	watch(['src/**/*.js', '!src/**/*.min.js'], scripts)
	watch('src/assets/img/**/*', images)
	watch('src/icons/**/*', icons)
	watch('src/fonts/**/*', fonts)
}

const build = parallel(html, scripts, styles, images, icons, fonts, server, watcher, cleanscss)

exports.server    = server
exports.watcher   = watcher
exports.html      = html
exports.scripts   = scripts
exports.styles    = styles
exports.images    = images
exports.fonts     = fonts
exports.cleanscss = cleanscss
exports.cleanimg  = cleanimg

exports.default = build