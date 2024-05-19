// ハンバーガーメニュー
$("#js-btnDrawer").on("click", function(){
  $(this).toggleClass("is-checked");
  $("#js-drawer").slideToggle();
  $("body").toggleClass("is-fixed");
});

$(".button__text").on("click", function(){
  $("#js-btnDrawer").toggleClass("is-checked");
  $("#js-drawer").slideUp();
  $("body").removeClass("is-fixed");

});



// モーダルを開く関数
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
  setTimeout(function() {
    modal.style.opacity = 1; // フェードインのアニメーションを開始する
  }, 10); // 適切な遅延を設定することで、ブラウザがアニメーションを正しく処理できるようにする
}

// モーダルを閉じる関数
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.opacity = 0; // フェードアウトのアニメーションを開始する
  setTimeout(function() {
    modal.style.display = "none"; // モーダルを非表示にする
  }, 300); // フェードアウトのアニメーション時間と同じだけ待つ
}

// 各「詳しく見る」リンクがクリックされたときに対応するモーダルを開くイベントリスナーを設定
document.querySelectorAll(".works__item-link").forEach(function(link) {
  link.addEventListener("click", function() {
    var modalId = this.getAttribute("data-modal-id");
    openModal(modalId);
  });
});

// 各閉じるボタンがクリックされたときに対応するモーダルを閉じるイベントリスナーを設定
document.querySelectorAll(".close").forEach(function(closeBtn) {
  closeBtn.addEventListener("click", function() {
    var modalId = this.parentNode.id;
    closeModal(modalId);
  });
});

// 各モーダル外の領域がクリックされたときに対応するモーダルを閉じるイベントリスナーを設定
document.querySelectorAll(".modal").forEach(function(modal) {
  modal.addEventListener("click", function(event) {
    if (event.target === this) {
      var modalId = this.id;
      closeModal(modalId);
    }
  });
});
