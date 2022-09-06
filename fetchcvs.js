const fetch = require('node-fetch')

// This code downloads a CSV file from my website, reads it as text
// and calls `processData(csvText)` on success. Do not worry about
// the details about `fetch` for now, as we will cover them later.

fetch('https://thomas-veillard.fr/wp-content/uploads/2021/07/apache-contributors-projects.csv')
    .then(res => res.text())
    .then(processData)
    .catch(console.log)

function processData(csvText) {

    var data = []

    const lines = csvText.split('\n')

    for (let index = 1; index < lines.length; index++) {

        const line = lines[index]

        const [username, realname, website, projectname] = line.split(',')

        if (website != '') {
            web = website
        }
        else {
            web = null
        }

        data.push({username, realname, web, projectname})
    }

    console.log(JSON.parse(JSON.stringify(data)))


}