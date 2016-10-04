(function (window, document, undefined) {
  'use strict'

  //
  // プレビューエリアの背景色を変更
  //
  var Aigis = window.Aigis || {}

  function _addClass (elms, classname, fn) {
    elms.forEach(function (elm) {
      elm.classList.add(classname)
      fn && fn(elm)
    })
  }
  function _removeClass (elms, classname, fn) {
    elms.forEach(function (elm) {
      elm.classList.remove(classname)
      fn && fn(elm)
    })
  }

  window.addEventListener('DOMContentLoaded', function () {
    var enableTarget = document.getElementById('aigis-preview-bg-color')
    var enabler = document.getElementById('aigis-preview-bg-color-enabler')
    var input = document.getElementById('aigis-preview-bg-color-changer')
    var previews = Array.from(document.querySelectorAll('.aigis-module > .aigis-preview'))
    // input[type=checkbox]
    enabler.addEventListener('click', function (e) {
      var _event;
      input.disabled = !input.disabled
      enableTarget.classList.toggle('is-disabled')
      if (input.disabled) {
        _removeClass(previews, 'is-edited')
      } else {
        _event = new MouseEvent('click', {
          'view': window,
          'bubbles': true,
          'cancelable': true
        });
        input.dispatchEvent(_event)
      }
    }, false)
    // input[type=color]
    input.addEventListener('input', function (e) {
      var color = this.value
      _addClass(previews, 'is-edited', function (preview) {
        preview.style.backgroundColor = color
      })
    }, false)
  }, false)

  window.Aigis = Aigis

})(this, this.document)
