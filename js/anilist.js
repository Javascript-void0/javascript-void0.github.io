var url = 'https://graphql.anilist.co'
var options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({
        query: `query ($id: Int) { # Define which variables will be used in the query (id)
                    User (id: $id) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
                        statistics {
                            anime {
                                count
                                meanScore
                                standardDeviation
                                minutesWatched
                                episodesWatched
                                statuses {
                                    count
                                    status
                                }
                                scores {
                                    count
                                    score
                                }
                                genres {
                                    count
                                    genre
                                }
                            }
                        }
                    }
                }`,
        variables: {
            id: 5641461 // anilist id: Java
        }
    })
};

fetch(url, options).then(handleResponse)
                    .then(handleData)

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

var anime;

function handleData(data) {
    // get anime data form api data
    anime = data['data']['User']['statistics']['anime']
    // save data in session storage
    if (sessionStorage.getItem('anime') == null || typeof sessionStorage.getItem('anime') === 'undefined') {
        sessionStorage.setItem('anime', JSON.stringify(anime))
    }
}

// adds html containing anime data
function addAnimeData(lines) {
    if (typeof anime === 'undefined') {
        // get data from session storage
        var anime = JSON.parse(sessionStorage.getItem('anime'))
    }

    // general stats (count, mean score, standard dev, minutes, and episodes)
    for (i = 0; i < 5; i++) {
        statName = Object.keys(anime)[i]
        statValue = anime[statName]
        lines.push('&nbsp<span class="secondary">></span> ' + camelCaseToString(statName) + ': <span class="secondary">' + statValue + '</span>')
    }

    // (3) histograms/chart things: 
    // i == 5: statuses (complete, planning, current, etc. )
    // i == 6: scores
    // i == 7: genres 
    for (i = 5; i < 8; i++) {
        statName = Object.keys(anime)[i]

        // name of stat, capitalized
        statNameCap = statName.charAt(0).toUpperCase() + statName.slice(1) 
        // title of graph category
        if (i == 5) {
            statNameSingular = 'status'
        } else if (i == 6) {
            statNameSingular = 'score'
        } else if (i == 7) {
            statNameSingular = 'genre'
        }
        
        // console.log(statNameSingular)
        statArray = anime[statName]
        
        // console.log(statNameCap, statValue, anime[statName].length)
        
        // add category title
        lines.push(`<br>### <span class="secondary">${statNameCap}</span><br>`)
        temp = []
        // get counts for each item, adding to temp
        for (j = 0; j < statArray.length; j++) {
            count = statArray[j]['count']
            temp.push(count)
        }
        
        // find min and max for graph
        graphMax = Math.max.apply(Math, temp)
        graphMax = Math.ceil(graphMax/5)*5

        // sort if score or genre
        if (i == 6) { // score
            statArray.sort(function(a, b){return b.score-a.score})
        } else if (i == 7) { // genre
            statArray.sort(function(a, b){return b.count-a.count})
        }

        // 
        for (j = 0; j < statArray.length; j++) {
            count = statArray[j]['count']
            statName = statArray[j][statNameSingular]
            // console.log(statName)

            // hundreds to tenths?
            if (Number.isInteger(statName)) {
                statName = statName / 10
            }

            // offset for numbers (scores)
            if (statName < 10 && statName % 1 != 0) {        // decimal number (.5)
                statName = `  >       ${statName}`
            } else if (statName < 10 && statName % 1 == 0) { // whole number
                statName = `  >       ${statName}.0`
            } else if (statName == 10) {                     // just 10
                statName = '  >      10.0'
            } else {                                         // probably just a string
                statName = statName
            }

            // different offset for strings, alignment
            // statuses
            if (statName == 'COMPLETED') { // idk hep
                statName = '    Completed'
            } else if (statName == 'PLANNING') {
                statName = '     Planning'
            } else if (statName == 'CURRENT') {
                statName = '      Current'
            } else if (statName == 'PAUSED') {
                statName = '       Paused'
            } else if (statName == 'DROPPED') {
                statName = '      Dropped'
            // genres
            } else if (statName == 'Comedy') {
                statName = '       Comedy'
            } else if (statName == 'Slife of Life') {
                statName = 'Slice of Life'
            } else if (statName == 'Drama') {
                statName = '        Drama'
            } else if (statName == 'Romance') {
                statName = '      Romance'
            } else if (statName == 'Action') {
                statName = '       Action'
            } else if (statName == 'Adventure') {
                statName = '    Adventure'
            } else if (statName == 'Supernatural') {
                statName = ' Supernatural'
            } else if (statName == 'Fantasy') {
                statName = '      Fantasy'
            } else if (statName == 'Mystery') {
                statName = '      Mystery'
            } else if (statName == 'Psychological') {
                statName = 'Psychological'
            } else if (statName == 'Music') {
                statName = '        Music'
            } else if (statName == 'Sports') {
                statName = '       Sports'
            } else if (statName == 'Thriller') {
                statName = '     Thriller'
            } else if (statName == 'Sci-Fi') {
                statName = '       Sci-Fi'
            } else if (statName == 'Horror') {
                statName = '       Horror'
            } else if (statName == 'Ecchi') {
                statName = '        Ecchi'
            } else if (statName == 'Mecha') {
                statName = '        Mecha'
            } else if (statName == 'Hentai') { // huh
                statName = '       Hentai'
            }

            // replace spaces for html
            statName = statName.replaceAll(' ', '&nbsp')
            // highlight arrows...
            statName = statName.replaceAll('>', '<span class="secondary">></span>')

            // generate graph
            numOfBlocks = (count / graphMax)
            block = ''
            for (n = 0; n < numOfBlocks * 20; n++) {
                block = `${block}=`
            }
            lines.push(`${statName} <span class="secondary">${block}</span> (${count})`)
        }
    }
    return lines
}

function camelCaseToString(text) {
    result = text.replace( /([A-Z])/g, " $1" );
    finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult
}

// AHHH what is this...
