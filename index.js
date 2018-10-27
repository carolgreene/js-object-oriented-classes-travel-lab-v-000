class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 0, 1)
    console.log(endDate)
    let totalYears = endDate - this.startDate /
    (365 * 24 * 60 * 60 * 1000)
    console.log(totalYears)
  }
}
