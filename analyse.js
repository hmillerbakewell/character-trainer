var d2 = function (a, b) {
  return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)
}

var imageMean = function (canvas) {
  var imageData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height)
  var totalWidth = 0
  var totalHeight = 0
  var numPixels = 0
  var addToMean = function (i) {
    var width = i % canvas.width
    var height = Math.floor(i / canvas.width)
    totalWidth += width
    totalHeight += height
    numPixels += 1
  }
  var max = 0
  for (var i = 0; i < imageData.data.length; i += 4) {
    // Just pull the alpha layer?
    var alpha = imageData.data[i + 3]
    if (alpha > 128) {
      var point = Math.floor(i / 4)
      addToMean(point)
      max = Math.max(max, alpha)
    }
  }
  console.log(max)
  return {
    averageX: totalWidth / numPixels,
    averageY: totalHeight / numPixels
  }
}

var imageAbsoluteDeviation = function (canvas, meanData) {
  var meanPoint = {
    x: meanData.averageX,
    y: meanData.averageY
  }
  var imageData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height)
  var totalDifference = 0
  var numPixels = 0
  var addToDifference = function (i) {
    var width = i % canvas.width
    var height = Math.floor(i / canvas.width)
    var difference = Math.sqrt(d2({
      x: width,
      y: height
    }, meanPoint))
    numPixels += 1
    totalDifference += difference
  }
  for (var i = 0; i < imageData.data.length; i += 4) {
    // Just pull the alpha layer?
    var alpha = imageData.data[i + 3]
    if (alpha > 128) {
      var point = Math.floor(i / 4)
      addToDifference(point)
    }
  }
  return {
    meanAbsoluteDeviation: totalDifference / numPixels
  }
}

module.exports.mean = imageMean
module.exports.deviation = imageAbsoluteDeviation
