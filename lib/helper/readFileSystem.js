// console.log(process.cwd() + "/Divvy_Trips_2019_Q2")
const filename = process.cwd() + "/Divvy_Trips_2019_Q2";

let fs = require('fs')

module.exports = fs.readFileSync(filename).toString()

