import { wallAxis } from './Wall'
import { deltaX, deltaY } from './deltas'
import { rotate, nextIn } from './array'
import _flattenDepth from 'lodash/flattenDeep'
import _uniq from 'lodash/uniq'

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

const invalidEndpoint = (master, candidate, axis) => (
  !VALID_ENDPOINT[axis][master.orientation].includes(candidate.orientation)
)

const smoothCorner = (corners, idx, reverse = false) => {
  const halfH = 50
  const master = corners[idx]
  var match, remaining, delta

  if (!master.orientation) return []
  remaining = rotate(corners, idx).slice(1)

  if (reverse) remaining = remaining.reverse()

  const axis = wallAxis(master.coordinate, remaining[0].coordinate)

  const candidates = remaining.filter((candidate, i) => {
    if (invalidEndpoint(master, candidate, axis)) return false
    if (axis === 'NorthSouth') {
      delta = deltaX(master, candidate)
      return delta <= halfH
    } else {
      delta = deltaY(master, candidate)
      return delta <= halfH
    }
  })

  if (candidates.length > 0) {
    match = candidates.pop()
  } else {
    match = remaining[0]
  }


  const ordered = [master,match].sort((a,b) => {
      if (a.id < b.id) {
        return -1
      } else if (a.id > b.id) {
        return 1
      } else return 0
  })
  const id = ordered.map(w => w.id).join('+')
  const key = ['wall',id].join('_')

  return {
    orig: ordered[0],
    dest: ordered[1],
    id,
    key
  }
}


function smoother(corners) {
  return _uniq(_flattenDepth(corners.map((c, idx) => (
    // [smoothCorner(corners, idx), smoothCorner(corners, idx, 'reverse')]
      [smoothCorner(corners, idx)]
  ))), 2)
}

export default smoother
