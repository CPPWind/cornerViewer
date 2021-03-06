  import { wallAxis } from './Wall'
  import { deltaX, deltaY } from './deltas'
  import { rotate, nextIn } from './array'
  import _flattenDepth from 'lodash/flattenDeep'
  import _uniq from 'lodash/uniq'

  const halfH = 50

  const VALID_ENDPOINT = {
    NorthSouth: {
      ne: ['se', null],
      nw: ['sw', null],
      sw: ['nw', null],
      se: ['ne', null],
    },
    EastWest: {
      ne: ['nw', null],
      nw: ['ne', null],
      sw: ['se', null],
      se: ['sw', null],
    },
  }

  const delta = (master, candidate, axis) => {
    if (axis === 'NorthSouth') {
      return deltaX(master, candidate) <= halfH
    } else {
      return deltaY(master, candidate) <= halfH
    }
  }

  const actualDirection = (master, candidate, axis) => {
    if (axis === 'NorthSouth' && (master.y > candidate.y)) {
      console.log('actualDirection', 'south')
      return 'South'
    } else if (axis === 'NorthSouth' && (master.y <= candidate.y)) {
      console.log('actualDirection', 'north')
      return 'North'
    } else if (axis === 'EastWest' && (master.x > candidate.x)) {
      console.log('actualDirection', 'east')
      return 'East'
    } else {
      console.log('actualDirection','west')
      return 'West'
    }
  }

  const correctDirection = (master, candidate, axis, direction) => {
    return (actualDirection(master.coordinate, candidate.coordinate, axis) === direction)
  }

  const endpointOk = (master, candidate, axis) => {
    const actualAxis = wallAxis(master.coordinate, candidate.coordinate)
    return [
      VALID_ENDPOINT[axis][master.orientation].includes(candidate.orientation),
      actualAxis === axis,
    ].every(c => c)
  }

  const validEndpoint = (master, candidate, axis, direction) => {
    const conditions = [
      endpointOk(master, candidate, axis),
      delta(master, candidate, axis),
      correctDirection(master, candidate, axis, direction)
    ]
    return conditions.every(c => c)
  }

  const smoothCorner = (corners, idx, reverse = false) => {
    const master = corners[idx]
    var match, remaining, delta

    if (!master.orientation) return []
    remaining = rotate(corners, idx).slice(1)

    if (reverse) remaining = remaining.reverse()

    const axis = wallAxis(master.coordinate, remaining[0].coordinate)
    const direction = actualDirection(master.coordinate, remaining[0].coordinate, axis)

    const candidates = remaining.filter((candidate, i) => {
      return validEndpoint(master, candidate, axis, direction)
    })
    const lengths = remaining.filter((candidate, i) => {
      return validEndpoint(master, candidate, axis, direction)
    })

    if (candidates.length > 0) {
      var byLengths = candidates.sort((a, b) => {
        if (axis === 'NorthSouth') {
          return deltaY(master, a) - deltaY(master, b)
        } else {
          return deltaX(master, a) - deltaX(master, b)
        }
      })

      console.log({
        master: master.id,
        axis,
        direction,
        reverse: reverse ? 'reverse' : 'forward',
        match: byLengths [byLengths.length - 1].id,
        candidates: candidates.map(c => c.id),
        lengthsX: byLengths.map(c => [c.id,deltaX(master,c)]),
        lengthsY: byLengths.map(c => [c.id,deltaY(master,c)])
      })
      match = byLengths.pop()
    } else {
      match = remaining[0]
    }


    const ordered = [master, match].sort((a, b) => {
      if (a.id < b.id) {
        return -1
      } else if (a.id > b.id) {
        return 1
      } else return 0
    })
    const id = ordered.map(w => w.id).join('+')
    const key = ['wall', id].join('_')

    return {
      orig: ordered[0],
      dest: ordered[1],
      id,
      key,
    }
  }


  function smoother(corners) {
    console.log('==========')
    return _uniq(_flattenDepth(corners.map((c, idx) => {
        return [
          smoothCorner(corners, idx),
          smoothCorner(corners, idx, 'reverse'),
        ]
      },
    )), 2)
  }

  export default smoother
