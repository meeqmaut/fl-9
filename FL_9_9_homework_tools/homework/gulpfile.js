const gulp = require("gulp");
const del = require("del");
const gulpConnect = require("gulp-connect");
const gulpConcat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const runSequence = require("run-sequence");
const inject = require('gulp-inject');
const jshint = require('gulp-jshint');

const files = [
  "./node_modules/moment/moment.js",
  "./src/js/canvasState.js",
  "./src/js/clock.js",
  "./src/js/app.js"
];

const path = {
  src: {
    js: "./src/js/**.js",
    css: "./src/sass/**.scss",
    html: "./src/*.html"
  },
  dev: {
    js: "./src/dev/js",
    css: "./src/dev/css",
    html: "./src/dev"
  },
  prod: {
    js: "dist/js",
    css: "dist/css",
    html: "dist"
  }
};

gulp.task("build-js-dev", function () {
  gulp
    .src(files)
    .pipe(sourcemaps.init())
    .pipe(gulpConcat("app.min.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(path.dev.js))
    .pipe(gulpConnect.reload());
});

gulp.task("build-js-prod", function () {
  gulp
    .src(files)
    .pipe(gulpConcat("app.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(path.prod.js));
});



gulp.task("build-css-dev", function () {
  gulp
    .src(path.src.css)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpConcat("style.min.css"))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(path.dev.css))
    .pipe(gulpConnect.reload());
});
gulp.task("build-css-prod", function () {
  gulp
    .src(path.src.css)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpConcat("style.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest(path.prod.css));
});


gulp.task("copy-html", function () {
  gulp
    .src(path.src.html)
    .pipe(rename("index.html"))
    .pipe(gulp.dest(path.prod.html))
});

gulp.task("gulpConnect", function () {
  gulpConnect.server({
    root: "src",
    livereload: true,
    port: 8080
  });
});

gulp.task("clean", function () {
  del(["dist", './src/dev']);
});



gulp.task("watch", function () {
  gulp.watch(path.src.html, gulpConnect.reload());
  gulp.watch(path.src.js, ["build-js-dev"]);
  gulp.watch(path.src.css, ["build-css-dev"]);
});



gulp.task('jshint', function () {
  return gulp.src(path.src.js)
    .pipe(jshint())
});


gulp.task("build", function () {
  runSequence("clean", ["build-js-dev", "build-css-dev"]);
});
gulp.task("build-prod", function () {
  runSequence("clean", ["build-js-prod", "build-css-prod"], 'copy-html');
});

gulp.task("default", function () {
  runSequence("build", "gulpConnect", "watch");
});