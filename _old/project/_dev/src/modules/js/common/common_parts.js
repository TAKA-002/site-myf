//==================================================
//ヘッダーの共通部分を呼び出す
//==================================================

//=============
//ヘッダー
//=============
export function header() {
  $.ajax({
    url: "/site-MYF/includes/mod_header.html",
    cache: false,
    dataType: "html",
    success: function (data) {
      $("#header").html(data);
    },
    // error: function (data) {
    //   $("#header").text("えらー");
    // },
  });
}

//=============
//フッダー
//=============
export function footer() {
  $.ajax({
    url: "/site-MYF/includes/mod_footer.html",
    cache: false,
    dataType: "html",
    success: function (data) {
      $("#footer").html(data);
    },
    // error: function (data) {
    //   $("#footer").text("えらー");
    // },
  });
}

//=============
//トップへ戻るボタン
//=============
export function toTopBtn() {
  $(function () {
    var toPageTopBtn = $("#toPageTop");
    toPageTopBtn.hide();

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        toPageTopBtn.fadeIn();
      } else {
        toPageTopBtn.fadeOut();
      }
    });

    toPageTopBtn.click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        500
      );
    });
  });
}

//=============
//menuボタン
//=============
export function menuBtn() {
  $(function () {
    $(document).on("click", "#menu__btn", function () {
      // console.log("クリックはされている");

      // #menu_btnに.activeがあるかどうか;
      if ($(this).hasClass("active")) {
        // .activeがあるときの処理
        $(this).removeClass("active");
        $(this).text("MENU");
        $("#menu").removeClass("open");
        $(".menu__background").removeClass("open");
      } else {
        // .activeがないときの処理
        $(this).addClass("active");
        $(this).text("CLOSE");
        $("#menu").addClass("open");
        $(".menu__background").addClass("open");
      }
    });

    // メニューの背景がクリックされたときの処理
    $(document).on("click", ".menu__background", function () {
      // .menu-backgroundに.openがあるかどうか
      if ($(this).hasClass("open")) {
        // .openがあるときの処理
        $(this).removeClass("open");
        $("#menu__btn").removeClass("active").text("MENU");
        $("#menu").removeClass("open");
      }
    });
  });
}

//=============
//menuボタン
//=============
export function chengeLang() {
  $(document).on("mouseover", "#ch-Lang", function () {
    // console.log("のったぜ");
    $("ul:not(:animated)", this).slideDown();
  });
  $(document).on("mouseleave", "#ch-Lang", function () {
    // console.log("おろしたぜ");
    $("ul.l-navi--chengeLang__list-item__wrap", this).slideUp();
  });
}
