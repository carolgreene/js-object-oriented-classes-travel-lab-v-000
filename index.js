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
    let horizontalDistance = (eastWest.indexOf(endingLocation) - eastWest.indexOf(beginningLocation))


  }
}
