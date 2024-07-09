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
      }, 10); // display: blockを適用してからクラスを追加するまでの遅延
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

//shimizu-------------------------
const trigger = new ScrollTrigger.default()
trigger.add('[data-trigger]', {
  once: true,
})
