var render = require('./render-to-canvas.js')
var $ = require('jquery')

window.onload = function () {
  var canvas = document.createElement('canvas')
  window.canvas = canvas
  canvas.width = 300
  canvas.height = 300
  $('body').append(canvas)

  // window.render.textToContext('g', canvas.getContext('2d'))
  render.textToContext(render.exampleKanji, canvas.getContext('2d'))
}
