const {src,dest,watch,series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('sassItUp/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchMan() {
    watch(['sassItUp/**/*.scss'],buildStyles)
}


exports.default = series(buildStyles,watchMan)