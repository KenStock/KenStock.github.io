window.onload = function() {
  main()
  var isCached =
    performance.getEntriesByType("navigation")[0].transferSize === 0
  if (!isCached) {
    window.location.reload()
  }
}

function main() {
  const canvas = document.querySelector("#home-canvas")

  const c = canvas.getContext("2d")

  canvas.width = document.body.offsetWidth
  canvas.height = document.body.offsetHeight
  init()

  window.addEventListener("resize", function(e) {
    canvas.width = document.body.offsetWidth
    canvas.height = document.body.offsetHeight
    c.clearRect(0, 0, innerWidth, innerHeight)
    init()
  })

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

  function inversedCircle(x, y, yOffset, radius, color) {
    this.x = x
    this.y = y
    ;(this.yOffset = yOffset), (this.radius = radius)
    this.color = color

    this.draw = function() {
      c.beginPath()
      c.rect(
        this.x - this.radius,
        this.y + this.yOffset,
        this.radius * 2,
        this.radius
      )
      c.fillStyle = this.color
      c.fill()
      c.closePath()

      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      c.fillStyle = "#FFFFFF"
      c.fill()
      c.closePath()
    }
  }

  var circleArray
  function init() {
    circleArray = []

    const specialityDiv = document.querySelector("#my-specialities")
    const softSkillDiv = document.querySelector("#soft-skills")
    const trustedDiv = document.querySelector("#trusted")

    const invCircle = new inversedCircle(
      softSkillDiv.offsetWidth * 0.5,
      softSkillDiv.offsetTop - softSkillDiv.offsetHeight * 1.35,
      softSkillDiv.offsetHeight,
      softSkillDiv.offsetWidth * 0.9,
      "#272426",
      0.3
    )
    circleArray.push(invCircle)

    const circle1 = new Circle(
      specialityDiv.offsetWidth * 0.5,
      specialityDiv.offsetTop + specialityDiv.offsetHeight * 0.55,
      document.body.offsetWidth * 0.9,
      "#272426",
      1
    )
    circleArray.push(circle1)

    const circle2 = new Circle(
      specialityDiv.offsetWidth * 0.07,
      specialityDiv.offsetTop + specialityDiv.offsetHeight * 0.17,
      specialityDiv.offsetWidth * 0.35,
      "#272426",
      0.3
    )
    circleArray.push(circle2)

    const circle3 = new Circle(
      specialityDiv.offsetWidth * 0.97,
      specialityDiv.offsetTop + specialityDiv.offsetHeight * 0.06,
      specialityDiv.offsetWidth * 0.065,
      "#272426",
      0.3
    )
    circleArray.push(circle3)

    const circle4 = new Circle(
      specialityDiv.offsetWidth * 0.57,
      specialityDiv.offsetTop + specialityDiv.offsetHeight * 0.58,
      document.body.offsetWidth * 0.9,
      "#272426",
      0.3
    )
    circleArray.push(circle4)

    const circle5 = new Circle(
      specialityDiv.offsetWidth * 0.85,
      specialityDiv.offsetTop + specialityDiv.offsetHeight * 1.05,
      document.body.offsetWidth * 0.1,
      "#272426",
      0.3
    )
    circleArray.push(circle5)

    const circle6 = new Circle(
      softSkillDiv.offsetWidth * 0.07,
      softSkillDiv.offsetTop + softSkillDiv.offsetHeight * -0.07,
      specialityDiv.offsetWidth * 0.13,
      "#272426",
      1
    )
    circleArray.push(circle6)

    const circle7 = new Circle(
      softSkillDiv.offsetWidth * 0.2,
      softSkillDiv.offsetTop + softSkillDiv.offsetHeight * 0.37,
      specialityDiv.offsetWidth * 0.3,
      "#272426",
      0.3
    )
    circleArray.push(circle7)

    const circle8 = new Circle(
      trustedDiv.offsetWidth * 0.7,
      trustedDiv.offsetTop + trustedDiv.offsetHeight * 0.25,
      trustedDiv.offsetWidth * 0.8,
      "#272426",
      1
    )
    circleArray.push(circle8)

    const circle9 = new Circle(
      trustedDiv.offsetWidth * 0.01,
      trustedDiv.offsetTop + trustedDiv.offsetHeight * 0.95,
      trustedDiv.offsetWidth * 0.2,
      "#272426",
      1
    )
    circleArray.push(circle9)

    const circle10 = new Circle(
      trustedDiv.offsetWidth * 0.2,
      trustedDiv.offsetTop + trustedDiv.offsetHeight * 1.1,
      trustedDiv.offsetWidth * 0.3,
      "#272426",
      0.3
    )
    circleArray.push(circle10)

    circleArray.forEach(circle => {
      circle.draw()
    })
  }
}
