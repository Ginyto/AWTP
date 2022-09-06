const fetch = require('node-fetch')
// This code downloads a CSV file from my website, reads it as text
// and calls `processData(csvText)` on success. Do not worry about
// the details about `fetch` for now, as we will cover them later.
fetch('https://thomas-veillard.fr/wp-content/uploads/2021/07/apache-contributors-projects.csv')
    .then(res => res.text())
    .then(processData)
    .catch(console.log)

function processData(csvText) {
    console.log(csvText)
}