// Given any form of input we want to render it, as large as possible, to a canvas element

var exampleKanji = 'た'

function imageToContext (image, context) {
  var rescale = scalePreservingAspectRatio(image.width, image.height, context.canvas.width, context.canvas.height)
  // drawImage needs (source :: which parts of source :: where to put in destination)
  context.drawImage(image,
    0, 0, image.width, image.height,
    rescale.widthPad, rescale.heightPad, rescale.newWidth, rescale.newHeight)
}

function scalePreservingAspectRatio (w1, h1, w2, h2) {
  var widthRescale = w1 / w2
  var heightRescale = h1 / h2
  var smaller = Math.min(widthRescale, heightRescale)
  var newWidth = w1 * smaller
  var newHeight = h1 * smaller
  return {
    newWidth: newWidth,
    newHeight: newHeight,
    widthPad: (w2 - newWidth) / 2,
    heightPad: (h2 - newHeight) / 2
  }
}

function textToContext (character, context) {
  context.font = '' + (context.canvas.height / 2) + 'px sans-serif'
  context.fillText(character, 0, (context.canvas.height / 2), context.canvas.width)
}

module.exports.exampleKanji = exampleKanji
module.exports.textToContext = textToContext
module.exports.imageToContext = imageToContext
