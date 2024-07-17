document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menuButton");
  const modal = document.getElementById("menuModal");
  const closeModal = document.getElementById("closeModal");
  const menuIcon = document.querySelector("#menuButton img"); // メニューアイコンの取得

  menuButton.addEventListener("click", () => {
    if (modal.classList.contains("show")) {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 500); // アニメーションの時間に合わせて変更
      menuIcon.src = "./images/menu_button.svg"; // 閉じているときのアイコン
    } else {
      modal.style.display = "block";
      setTimeout(() => {
        modal.classList.add("show");
      }, 0); // display: blockを適用してからクラスを追加するまでの遅延
      menuIcon.src = "./images/close.svg"; // 開いているときのアイコン
    }
  });

  // モーダルの外側をクリックしてモーダルを閉じる
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 500); // アニメーションの時間に合わせて変更
    }
  });

  // 閉じるボタンのイベントリスナーを追加
  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 500); // アニメーションの時間に合わせて変更
  });
});

const plusIcons = document.querySelectorAll(".question__plus");

plusIcons.forEach(function (plusIcon) {
  plusIcon.addEventListener("click", function () {
    const answer = this.closest(".question").nextElementSibling;

    if (answer.classList.contains("open")) {
      answer.classList.remove("open");
      plusIcon.classList.remove("open");
      plusIcon.src = "./images/plus_icon.svg";
    } else {
      answer.classList.add("open");
      plusIcon.classList.add("open");
      plusIcon.src = "./images/icon_minus.svg";
    }
  });
});

document.addEventListener(
  "DOMContentLoaded",
  function () {
    const targets = document.getElementsByClassName("tab");
    for (let i = 0; i < targets.length; i++) {
      targets[i].addEventListener("click", changeTab, false);
    } // タブメニューボタンをクリックすると実行
    function changeTab() {
      // タブのclassを変更
      document
        .getElementsByClassName("is-active")[0]
        .classList.remove("is-active");
      this.classList.add("is-active"); // コンテンツのclassの値を変更
      document
        .getElementsByClassName("is-display")[0]
        .classList.remove("is-display");
      const arrayTabs = Array.prototype.slice.call(targets);
      const index = arrayTabs.indexOf(this);
      document
        .getElementsByClassName("content")
        [index].classList.add("is-display");
    }
  },
  false
);

//shimizu-------------------------
//線が伸びるための設定を関数でまとめる
function ScrollTimelineAnime() {
  $(".timeline li").each(function () {
    // それぞれのli要素の
    var elemPos = $(this).offset().top; // 上からの高さ取得
    var scroll = $(window).scrollTop(); // スクロール値取得
    var windowHeight = $(window).height(); // windowの高さ取得
    var startPoint = 100; //線をスタートさせる位置を指定※レイアウトによって調整してください
    if (scroll >= elemPos - windowHeight - startPoint) {
      var H = $(this).outerHeight(true); //liの余白と高さを含めた数値を取得
      //スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
      var percent = ((scroll + startPoint - elemPos) / (H / 2)) * 100; //liの余白と高さの半分で線を100％に伸ばす

      // 100% を超えたらずっと100%を入れ続ける
      if (percent > 100) {
        percent = 100;
      }
      // ボーダーの長さをセット
      $(this)
        .children(".border-line")
        .css({
          height: percent + "%", //CSSでパーセント指定
        });
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on("scroll", function () {
  ScrollTimelineAnime(); // 線が伸びる関数を呼ぶ
});
