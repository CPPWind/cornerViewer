import smoother from './Smoother'

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
      endpoints: { NorthSouth: null, EastWest: null },
    }
    this.props.corners = this.processCorners(corners)
    this.props.walls = this.processWalls(corners)
    this.props.expected = this.processExpected(expected)
    this.props.results = this.processResults()
  }

  processWalls() {
    const s = smoother(this.props.corners)
    return s
  }

  processResults() {
    this.expectedIds.forEach((id, idx) => {
      if (this.wallIds.includes(id)) {
        this.props.expected[idx].result = '✔'
        this.props.expected[idx].resultTheme = 'success'
      } else {
        this.props.expected[idx].result = 'X'
        this.props.expected[idx].resultTheme = 'danger'
      }
    })
  }

  processCorners(corners) {
    return corners.map((c, idx) => {
      this.corners[c.id] = new Corner(c, this, idx).props
      return this.corners[c.id]
    })
  }

  get wallIds() {
    return this.props.walls.map(w=>w.id)
  }

  get expectedIds() {
    return this.props.expected.map(e => {
      return [e.orig.id, e.dest.id].sort().join('+')
    })
  }

  processExpected(expected) {
    return expected.map((exp, idx) => {
      const sorted = exp.sort()
      const data = {
        orig: this.corners[sorted[0]],
        dest: this.corners[sorted[1]],
        order: idx,

        result: '?',
        resultTheme: 'warning'
      }
      data.id = [data.orig.id,data.dest.id].sort().join('+')
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
