window.render = require('./render-to-canvas.js')
window.analysis = require('./analyse.js')
var $ = require('jquery')

window.onload = function () {
  var canvas = document.createElement('canvas')
  var render = window.render
  var analysis = window.analysis
  window.canvas = canvas
  canvas.width = 300
  canvas.height = 300
  $('body').append(canvas)

  // window.render.textToContext('g', canvas.getContext('2d'))
  render.textToContext(render.exampleKanji, canvas.getContext('2d'))
}

window.assess = function () {
  var render = window.render
  var analysis = window.analysis
  var canvas = window.canvas
  var mean = analysis.mean(canvas)
  console.log('The image mean is: ')
  console.log(mean)

  var deviation = analysis.deviation(canvas, mean)
  console.log('The image deviation is: ')
  console.log(deviation)

  // render.circle(mean.averageX, mean.averageY, 5, canvas.getContext('2d'))
  render.circle(mean.averageX, mean.averageY, deviation.meanAbsoluteDeviation, canvas.getContext('2d'))
}
