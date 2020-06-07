const gulp = require("gulp");
const postcss = require("gulp-postcss");

let postcssPlugins = [require("tailwindcss"), require("autoprefixer")({})];

gulp.task("build", () =>
  gulp
    .src("src/css/main.css")
    .pipe(
      postcss([
        ...postcssPlugins,
        require("@fullhuman/postcss-purgecss")({
          content: ["./public/**/*.html"],
          defaultExtractor: (content) => {
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
            const innerMatches =
              content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
            return broadMatches.concat(innerMatches);
          },
        }),
        require("cssnano"),
      ])
    )
    .pipe(gulp.dest("public/"))
);

gulp.task("dev", () =>
  gulp.watch(["src/css/**/*.css", "./tailwind.config.js"], function css(cb) {
    gulp
      .src("src/css/main.css")
      .pipe(postcss(postcssPlugins))
      .pipe(gulp.dest("public/"));
    cb();
  })
);
