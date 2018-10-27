class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 0, 1)
    console.log(endDate)
    let totalYears = (endDate - this.startDate) /
    (365 * 24 * 60 * 60 * 1000)
    return Math.floor(totalYears)
  }
}

let eastWest = ['1st Avenue','2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let horizontalDistance = eastWest.indexOf(this.endingLocation.horizontal) -
    eastWest.indexOf(this.beginningLocation.horizontal)
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    return horizontalDistance + verticalDistance
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
    }
  }
