var gulp = require('gulp');
var path = require('path');

var $ = require('gulp-load-plugins')();

var conf = {
  paths: {
    src: 'src',
    tmp_ts: '.tmp/typescript',
    tmp_js: '.tmp/js'
  }
};

function webpack(watch, callback) {
  var webpackOptions = {
    watch: watch,
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    },
    output: {
      filename: 'index.js'
    }
  };
  return gulp.src(path.join(conf.paths.tmp_ts, '/app.js'))
    .pipe($.webpack(webpackOptions, null, () => {}))
    .pipe(gulp.dest(path.join(conf.paths.tmp_js)));
}


gulp.task('scripts', () => webpack(false));

gulp.task('watch', () => {
  gulp.watch([conf.paths.tmp_ts + '/**/*.js'], ['scripts'])
});
