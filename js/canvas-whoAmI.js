window.onload = function() {
  main()
  var isCached =
    performance.getEntriesByType("navigation")[0].transferSize === 0
  if (!isCached) {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
  }
}

function main() {
  const canvas = document.querySelector("#whoAmI-canvas")

  const c = canvas.getContext("2d")

  canvas.width = document.body.offsetWidth
  canvas.height = document.body.offsetHeight
  init()

  window.addEventListener(
    "resize",
    function(e) {
      canvas.width = document.body.offsetWidth
      canvas.height = document.body.offsetHeight
      c.clearRect(0, 0, innerWidth, innerHeight)
      init()
    },
    false
  )

  function Circle(x, y, radius, color, opacity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.opacity = opacity

    this.draw = function() {
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      c.save()
      c.globalAlpha = this.opacity
      c.fillStyle = this.color
      c.fill()
      c.restore()
      c.closePath()
    }
  }

  var circleArray
  function init() {
    circleArray = []

    const w = document.body.offsetWidth

    const circle1 = new Circle(w * 0.75, w * -0.25, w * 0.55, "#3E3438", 1)
    circleArray.push(circle1)

    const circle2 = new Circle(w * 0.69, w * 0.24, w * 0.15, "#8b2c22", 1)
    circleArray.push(circle2)

    const circle3 = new Circle(w * 0.25, w * -0.3, w * 0.7, "#272426", 1)
    circleArray.push(circle3)

    const circle4 = new Circle(w * 0.03, w * 0.4, w * 0.1, "#3E3438", 1)
    circleArray.push(circle4)

    const hobbiesDiv = document.querySelector("#hobbies")

    const circle8 = new Circle(
      hobbiesDiv.offsetWidth * 0.7,
      hobbiesDiv.offsetTop + hobbiesDiv.offsetHeight * 0.25,
      hobbiesDiv.offsetWidth * 0.8,
      "#272426",
      1
    )
    circleArray.push(circle8)

    const circle9 = new Circle(
      hobbiesDiv.offsetWidth * 0.01,
      hobbiesDiv.offsetTop + hobbiesDiv.offsetHeight * 0.95,
      hobbiesDiv.offsetWidth * 0.2,
      "#272426",
      1
    )
    circleArray.push(circle9)

    const circle10 = new Circle(
      hobbiesDiv.offsetWidth * 0.2,
      hobbiesDiv.offsetTop + hobbiesDiv.offsetHeight * 1.1,
      hobbiesDiv.offsetWidth * 0.3,
      "#272426",
      0.3
    )
    circleArray.push(circle10)

    circleArray.forEach(circle => {
      circle.draw()
    })
  }
}
