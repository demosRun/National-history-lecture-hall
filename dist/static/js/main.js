
// 设计宽度
var deviseW = 1920
// 设计高度
var deviseH = 1008
var innerWidth = window.innerWidth
var innerHeight = window.innerHeight
function getScale () {
  if ((innerWidth / innerHeight) > 1.9) {
    var scale = innerWidth / deviseW
    document.body.style.width = deviseW + 'px'
    document.body.style.height = deviseH + 'px'
    document.body.style.transform = "scale(" + scale + ", " + scale + ")"
    
    document.body.style.transformOrigin = "0 " + (innerHeight - deviseH * scale) + 'px' + " 0"
  } else {
    // 如果比例大于1则进入电脑模式
    if ((innerWidth / innerHeight) > 1) {
      var scale = (innerHeight / deviseH).toFixed(2)
      document.body.style.width = deviseW + 'px'
      document.body.style.height = deviseH + 'px'
      // console.log("scale(" + scale + ", " + scale + ") translate(" + (innerWidth - deviseW * scale) / 2 / scale + 'px' + ", 0)")
      document.body.style.transform = "scale(" + scale + ", " + scale + ") translate(" + (innerWidth - deviseW * scale) / 2 / scale + 'px' + ", 0)"
      document.body.style.transformOrigin = '0 0 0'
    } else {
      var scale = (innerWidth / deviseH).toFixed(2)
      document.body.style.width = deviseW + 'px'
      document.body.style.height = deviseH + 'px'
      document.body.style.transform = "scale(" + scale + ", " + scale + ") translate(" + deviseH + "px, " + (innerHeight - deviseW * scale) / 2 / scale +"px) rotate(90deg)"
      document.body.style.transformOrigin = '0 0 0'
    }
    
  }
  // setTimeout(function () {
  //   console.log(document.getElementsByTagName('html'))
  //   document.getElementsByTagName('html')[0].style.height = document.body.offsetHeight * scale + 'px'
  // }, 0)
}

getScale()

var timer = null
window.onresize = function ()  {
  if (!timer) {
    timer = setTimeout(function () {
      getScale()
      timer = null
    }, 1000)
  }
}