
class Roof {
  constructor({ name, invertY, box, corners, expected }) {
    this.corners = {}
    this.key = name.toLowerCase().replace(/\W+/g, '_')
    this.invertY = invertY
    this.props = {
      name: name,
      invertY: invertY,
      box: box,
      key: this.key,
    }
    this.props.corners = this.processCorners(corners)
    this.props.expected = this.processExpected(expected)
  }

  processCorners(corners) {
    return corners.map((c, idx) => {
      this.corners[c.id] = new Corner(c, this, idx).props
      return this.corners[c.id]
    })
  }

  processExpected(expected) {
    return expected.map((exp, idx) => {
      const data = {
        orig: this.corners[exp[0]],
        dest: this.corners[exp[1]],
        order: idx,

        result: '?',
      }
      data.key = `expected-${data.orig.key}-${data.dest.key}-${idx}`
      return data
    })
  }
}

class Corner {
  constructor({ id, orientation, coordinate }, roof, order) {
    this.props = {
      id: id,
      order: order,
      orientation: orientation,
      coordinate: coordinate,
      point: {
        x: coordinate.x,
        y: roof.invertY - coordinate.y,
      },
      theme: `corner${order}`,
      key: `${roof.key}_corner_${id}`,
    }
  }
}

export default Roof
