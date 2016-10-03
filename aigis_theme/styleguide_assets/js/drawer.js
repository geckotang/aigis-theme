// ドロワーの設定
(function (window, document, undefined) {
  'use strict'

  //
  // ドロワー
  //
  var Aigis = window.Aigis || {}

  var visible = false;

  window.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('aigis-drawer-toggler')
    var icon = document.getElementById('aigis-drawer-toggler-icon')
    var drawer = document.getElementById('aigis-drawer')
    // ハンバーガー
    button.addEventListener('click', function () {
      visible = visible ? false : true;
      icon.classList.toggle('is-active')
      drawer.classList.toggle('is-opened')
    }, false)
    // ESCキー
    window.addEventListener('keyup', function (e) {
      if (!visible) {
        return;
      }
      if (e.keyCode === 27) {
        button.click()
      }
    }, false)
  }, false)


  window.Aigis = Aigis

})(this, this.document)
