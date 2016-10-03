// 検索用の設定
(function (window, document, undefined) {
  'use strict'

  //
  // 全文検索用
  //
  var Aigis = window.Aigis || {}
  var lunr = window.lunr

  Aigis.lunrIndex = lunr(function () {
    // use the language (en and jp)
    // this.use(lunr.jp);
    // this.use(lunr.multiLanguage('en', 'jp'));
    // then, the normal lunr index initialization
    this.field('id')
    this.field('name', { boost: 70 })
    this.field('body', { boost: 50 })
    this.field('tags', { boost: 30 })
    this.field('categories', { boost: 10 })
    this.ref('id')
  })

  window.Aigis = Aigis

  //
  // 検索フォーム
  //
  function onInput (e) {
    var value = e.target.value
    var result, shown_idxes, modules
    modules = Array.from(document.querySelectorAll('[data-component-idx]'))
    if (value.trim() === '') {
      modules.forEach(function (v) {
        v.style.display = 'block'
      })
    } else {
      result = window.Aigis.lunrIndex.search(value)
      shown_idxes = result.map(function (v) {
        return v.ref
      })
      if (result.length === 0) {
        return
      }
      modules.forEach(function (v) {
        var idx = parseInt(v.getAttribute('data-component-idx'), 10)
        v.style.display = (shown_idxes.includes(idx)) ? 'block' : 'none'
      })
    }
  }
  // 入力したら〜
  window.addEventListener('DOMContentLoaded', function () {
    var $input = document.getElementById('aigis-incremental-search')
    $input.addEventListener('keyup', onInput, false)
    $input.addEventListener('input', onInput, false)
  }, false)

})(this, this.document)
