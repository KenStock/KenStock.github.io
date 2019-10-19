main()

function main() {
  const canvas = document.querySelector("#side-bar")
  const educationDiv = document.querySelector(".education-element-container")

  const c = canvas.getContext("2d")

  canvas.width = educationDiv.offsetWidth * 0.075
  canvas.height = educationDiv.clientHeight * 1.05
  init()

  window.addEventListener("resize", function(e) {
    canvas.width = educationDiv.offsetWidth * 0.075
    canvas.height = educationDiv.clientHeight * 1.05
    c.clearRect(0, 0, innerWidth, innerHeight)
    init()
  })

  function Marker(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius

    this.draw = function() {
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      c.fillStyle = "#FFFFFF"
      c.fill()
      c.closePath()
      c.beginPath()
      c.arc(this.x, this.y, this.radius * 0.6, 0, Math.PI * 2, false)
      c.fillStyle = "#39a9e0"
      c.fill()
      c.closePath()
    }
  }

  var markerArray
  function init() {
    const w = canvas.width

    //draw the line
    c.beginPath()
    c.moveTo(w * 0.5, canvas.height * 0.01)
    c.lineTo(w * 0.5, canvas.height)
    c.strokeStyle = "#FFFFFF"
    c.lineWidth = w * 0.2
    c.lineCap = "round"
    c.stroke()
    c.closePath()

    markerArray = []
    const elements = document.querySelectorAll(".education-element")

    elements.forEach((element, ndx) => {
      const y = element.offsetTop - educationDiv.offsetTop

      if (ndx == 4) {
        const marker = new Marker(w * 0.5, y + w * 1.2, w * 0.4)
        markerArray.push(marker)

        c.clearRect(0, y + 2.4 * w, innerWidth, w * 0.2)
        c.clearRect(0, y + 2.8 * w, innerWidth, w * 0.2)
        c.clearRect(0, y + 3.2 * w, innerWidth, w * 0.2)
        c.clearRect(0, y + 3.6 * w, innerWidth, w * 0.2)
      } else {
        const marker = new Marker(w * 0.5, y + w * 1.2, w * 0.3)
        markerArray.push(marker)
      }
    })

    // const circle1 = new Marker(w * 0.75, w * -0.25, w * 0.55, "#3E3438", 1)
    // markerArray.push(circle1)

    markerArray.forEach(circle => {
      circle.draw()
    })
  }
}
