// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");

// style.scssをタスクを作成する
gulp.task("default", function () {
  // ★ style.scssファイルを監視
  // 監視対象のファイルをcss配下の全scssファイルにする
  return gulp.watch("./src/modules/css/*/*.scss", function () {
    // style.scssの更新があった場合の処理を以下に書く

    // style.scssファイルを取得
    return (
      gulp
        // 全scssファイルを取りまとめたstyle.scssファイルを対象にして取得
        .src("./src/modules/css/style.scss")
        .pipe(sourcemaps.init())
        // Sassのコンパイルを実行
        .pipe(
          sass({
            outputStyle: "expanded",
          })
            // Sassのコンパイルエラーを表示
            // これがないと自動的に止まってしまう
            .on("error", sass.logError)
        )
        // mapファイルを作成
        .pipe(sourcemaps.write("../css"))
        // cssフォルダー以下に出力
        .pipe(gulp.dest("../css"))
    );
  });
});

// _devディレクトリで「npx gulp」で起動
// 終わるときにはそのままエディタを閉じてOK（mac：control + cでも終了可能）
