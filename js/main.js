document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".header__menuButton--image");
  const modal = document.getElementById("menuModal");
  const closeModal = document.getElementById("closeModal");

  // モーダルを表示する
  menuButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // モーダルを閉じる
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // モーダルの外側をクリックしてモーダルを閉じる
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

//shimizu-------------------------
const trigger = new ScrollTrigger.default()
trigger.add('[data-trigger]', {
  once: true,
})
