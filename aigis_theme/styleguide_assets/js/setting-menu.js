// 設定変更画面の呼び出し
(function (window, document, undefined) {
  'use strict'

  //
  // 設定変更画面
  //
  var Aigis = window.Aigis || {}

  var visible = false;

  window.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('aigis-setting-menu-toggler')
    var icon = document.getElementById('aigis-setting-menu-icon')
    var menu = document.getElementById('aigis-setting-menu')
    // 設定アイコン
    button.addEventListener('click', function () {
      visible = visible ? false : true;
      icon.classList.toggle('is-active')
      menu.classList.toggle('is-opened')
    }, false)
    // ESCキー
    document.addEventListener('click', function (e) {
      console.log(e)
    }, false)
  }, false)


  window.Aigis = Aigis

})(this, this.document)
