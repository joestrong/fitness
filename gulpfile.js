var gulp = require("gulp");
var rename = require("gulp-rename");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var sass = require("gulp-sass");

gulp.task("scripts", function() {
    browserify("./assets/js/app.js", { debug: true })
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .on("error", function (err) { console.log("Error : " + err.message); })
        .pipe(gulp.dest('./public/'));
});

gulp.task("styles", ['sasslibs'], function() {
    gulp.src('./assets/sass/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/'));
});

gulp.task("sasslibs", function() {
    gulp.src('./node_modules/material-design-lite/material.css')
        .pipe(rename('_material.scss'))
        .pipe(gulp.dest('./assets/sass/'));
});

gulp.task("default", ['scripts', 'styles']);

gulp.task("watch", ['default'], function() {
    gulp.watch('./assets/js/**/*', ['scripts']);
    gulp.watch('./assets/sass/**/*', ['styles']);
});
