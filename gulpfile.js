// npm library dependencies.
const {src,dest,watch,series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecssc = require('gulp-purgecss')

// compile sass, purge un-used sass and generate css file
function buildStyles(){
    return src('sassItUp/**/*.scss')
    .pipe(sass())
    .pipe(purgecssc({content: ['*.html'] }))
    .pipe(dest('css'))
}

// files to watch changes for to recall buildstyles function
function watchMan() {
    watch(['sassItUp/**/*.scss', '*.html'],buildStyles)
}

// export build styles and watchman functions to run on gulp call
exports.default = series(buildStyles,watchMan)