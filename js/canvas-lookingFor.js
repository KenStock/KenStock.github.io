main()

function main() {
  const canvas = document.querySelector("#lookingFor-canvas")
  const lookinForDiv = document.querySelector("#looking-for")

  const c = canvas.getContext("2d")

  //   console.log(canvas)

  canvas.width = lookinForDiv.offsetWidth
  canvas.height = lookinForDiv.clientHeight
  init()

  window.addEventListener("resize", function(e) {
    canvas.width = lookinForDiv.clientWidth
    canvas.height = lookinForDiv.clientHeight
    c.clearRect(0, 0, innerWidth, innerHeight)
    init()
  })

  function Line(x1, y1, x2, y2, quest, text, isUp) {
    this.x1 = x1
    this.x2 = x2
    this.y1 = y1
    this.y2 = y2
    this.text = text
    this.quest = quest
    this.w = canvas.width
    this.isUp = isUp

    this.draw = function() {
      c.beginPath()
      c.moveTo(this.x1, this.y1)
      c.lineTo(this.x2, this.y2)
      c.strokeStyle = "#FFFFFF"
      c.lineWidth = this.w * 0.005
      c.lineCap = "round"
      c.strokeStyle = "#272426"
      c.stroke()
      c.closePath()

      c.font = "bold 1.5em DolceVita"
      const measureQuest = c.measureText(this.quest)
      const measureText = c.measureText(this.text)
      c.fillStyle = "#8b2c22"
      c.fillText(
        this.quest,
        this.x2 - (measureQuest.width + measureText.width) / 2,
        this.isUp
          ? this.y2 - this.w * 0.02
          : this.y2 + measureText.actualBoundingBoxAscent + this.w * 0.02
      )
      c.fillStyle = "#272426"
      c.fillText(
        this.text,
        this.x2 - (measureText.width - measureQuest.width) / 2,
        this.isUp
          ? this.y2 - this.w * 0.02
          : this.y2 + measureText.actualBoundingBoxAscent + this.w * 0.02
      )
    }
  }

  var lineArray
  function init() {
    const w = canvas.width
    const h = canvas.height
    lineArray = []

    const line1 = new Line(
      w * 0.5,
      h * 0.37,
      w * 0.45,
      h * 0.25,
      "What:",
      " An Internship",
      true
    )
    lineArray.push(line1)

    const line2 = new Line(
      w * 0.35,
      h * 0.63,
      w * 0.27,
      h * 0.67,
      "When:",
      " Begining in March",
      false
    )
    lineArray.push(line2)

    const line3 = new Line(
      w * 0.72,
      h * 0.53,
      w * 0.78,
      h * 0.62,
      "How long:",
      " 6 months",
      false
    )
    lineArray.push(line3)

    lineArray.forEach(line => {
      line.draw()
    })
  }
}
