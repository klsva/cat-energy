import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import include from "gulp-file-include";
import browserSc from 'browser-sync';
import uglifyImp from 'gulp-uglify-es'
import autoPrefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
import del from 'del';
import rigger from 'gulp-rigger';
import sourcemaps from 'gulp-sourcemaps';
import cssmin from 'gulp-minify-css';
import pngquant from 'imagemin-pngquant';
import webpack from 'webpack-stream';
import { resolve } from 'node:path';
import replace from 'gulp-replace';
import deploy from 'gulp-gh-pages';

const scss = gulpSass(dartSass);
const browserSync = browserSc.create();
const uglify = uglifyImp.default;

const paths = {
  build: {
      html: 'build/',
      js: 'build/scripts/',
      css: 'build/styles/',
      img: 'build/images/',
      fonts: 'build/fonts/'
  },
  src: {
      html: [
        "./src/views/**/*.html",
        "./src/views/pages/*.html"
      ],
      js: './src/scripts/main.js',
      style: './src/styles/main.scss',
      img: 'src/images/**/*.*',
      fonts: 'src/fonts/**/*.*'
  },
  watch: {
      html: [
        "./src/blocks/**/*.html",
        "./src/views/**/*.html"
      ],
      js: [
        "./src/blocks/**/*.js",
        "./src/scripts/**/*.js"
      ],
      style:  [
        "./src/blocks/**/*.{scss,sass}",
        "./src/styles/**/*.{scss,sass}"
      ],
      img: 'src/images/**/*.*',
      fonts: 'src/fonts/**/*.*'
  },
  clean: './build'
};

const config = {
    server: "./build/",
    port: 3000,
    notify: true
};

gulp.task('clean', () => {
  return del(paths.clean);
});

gulp.task('html:build', () => {
  return gulp.src(paths.src.html) 
      .pipe(include({
        prefix: "@@",
        basepath: "@file"
      }))
      .pipe(rigger()) 
      .pipe(replace('../../../images', 'images'))
      .pipe(gulp.dest(paths.build.html))
      .pipe(browserSync.stream());
});

gulp.task('js:build', () => {
  return gulp.src(paths.src.js)
        .pipe(
          webpack({
            entry: {
            main: paths.src.js
            },
            output: {
              filename: "[name].js",
              chunkFilename: "[name].js",
              publicPath: "/"
            },
          // optimization: {
          //     splitChunks: {
          //         cacheGroups: {
          //             vendor: {
          //                 test: /node_modules/,
          //                 chunks: "initial",
          //                 name: "vendor",
          //                 enforce: true
          //             }
          //         }
          //     }
          // },
            module: {
              rules: [
                {
                  test: /\.(?:js|mjs|cjs)$/,
                  exclude: /node_modules/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        ['@babel/preset-env', { targets: "defaults" }]
                      ]
                    }
                  }
                }
              ]
            },
            resolve: {
              alias: {
                  "%modules%": resolve("src/blocks/modules"),
                  "%components%": resolve("src/blocks/components")
              }
            },
            mode: 'development',
          })
        )
        .pipe(gulp.dest('build/scripts'))
        .pipe(browserSync.stream());
})

gulp.task('style:build', () => {
  return gulp.src(paths.src.style) 
      .pipe(sourcemaps.init())
      .pipe(scss({
          sourceMap: true,
          errLogToConsole: true
      }))
      .pipe(autoPrefixer())
      .pipe(cssmin())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.build.css))
      .pipe(browserSync.stream());
});

gulp.task('image:build', () => {
  return gulp.src(paths.src.img) 
      .pipe(imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()],
          interlaced: true
      }))
      .pipe(gulp.dest(paths.build.img))
      .pipe(browserSync.stream());
});

gulp.task('fonts:build', () => {
  return gulp.src(paths.src.fonts)
      .pipe(gulp.dest(paths.build.fonts))
});

gulp.task('build', gulp.parallel([
  'html:build',
  'js:build',
  'style:build',
  'fonts:build',
  'image:build'
]));

gulp.task('webserver',  () => {
  browserSync.init(config);
  gulp.watch(paths.watch.html, gulp.parallel("html:build"));
  gulp.watch(paths.watch.style, gulp.parallel("style:build"));
  gulp.watch(paths.watch.js, gulp.parallel("js:build"));
  gulp.watch(paths.watch.img, gulp.parallel("image:build"));
  gulp.watch(paths.watch.fonts, gulp.parallel("fonts:build"));
});

gulp.task('deploy', () => {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
})

gulp.task('default', 
            gulp.series('clean', 
            gulp.parallel('build'), 
            gulp.parallel('webserver')
));