// コードブロックの表示切り替え
(function (window, document, undefined) {
  'use strict'

  //
  // 設定変更画面
  //
  var Aigis = window.Aigis || {}

  var visible_all = false

  window.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('aigis-codeblocks-expander')
    var codeblocks = Array.from(document.querySelectorAll('.aigis-module > pre'))
    // チェックボックス
    checkbox.addEventListener('click', function (e) {
      visible_all = !visible_all
      codeblocks.forEach(function (codeblock) {
        codeblock.classList.toggle('is-opened')
      })
    }, false)
  }, false)

  window.Aigis = Aigis

})(this, this.document)
