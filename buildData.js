const YAML = require('yamljs')
const fs = require('fs')

const reports = YAML.load('./data/reports.yaml')
const events = YAML.load('./data/events.yaml')

const writeJSON = (name, data) => {
  fs.writeFile(
    `./app/static/${name}.json`,
    JSON.stringify(data, null, 4),
    err => {
      if (err) {
        throw err
      }
    }
  )
}

writeJSON('reports', reports)
writeJSON('events', events)
