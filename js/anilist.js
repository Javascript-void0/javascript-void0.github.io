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
            id: 5641461
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
    anime = data['data']['User']['statistics']['anime']
    // console.log(anime)
}

function addAnimeData(lines) {
    for (i = 0; i < 5; i++) {
        statName = Object.keys(anime)[i]
        statValue = anime[statName]
        lines.push('&nbsp> ' + camelCaseToString(statName) + ': ' + statValue)
    }
    for (i = 5; i < 8; i++) {
        statName = Object.keys(anime)[i]
        statNameCap = statName.charAt(0).toUpperCase() + statName.slice(1)
        if (i == 5) {
            statNameSingular = 'status'
        } else if (i == 6) {
            statNameSingular = 'score'
        } else if (i == 7) {
            statNameSingular = 'genre'
        }
        console.log(statNameSingular)
        statArray = anime[statName]
        // console.log(statNameCap, statValue, anime[statName].length)
        lines.push(`<br>### ${statNameCap}<br>`)
        temp = []
        for (j = 0; j < statArray.length; j++) {
            count = statArray[j]['count']
            temp.push(count)
        }
        graphMax = Math.max.apply(Math, temp)
        graphMax = Math.ceil(graphMax/5)*5

        if (i == 6) {
            statArray.sort(function(a, b){return b.score-a.score})
        } else if (i == 7) {
            statArray.sort(function(a, b){return b.count-a.count})
        }

        for (j = 0; j < statArray.length; j++) {
            count = statArray[j]['count']
            statName = statArray[j][statNameSingular]
            console.log(statName)
            if (Number.isInteger(statName)) {
                statName = statName / 10
            }
            if (statName < 10 && statName % 1 != 0) {
                statName = `  >       ${statName}`
            } else if (statName < 10 && statName % 1 == 0) {
                statName = `  >       ${statName}.0`
            } else if (statName == 10) {
                statName = '  >      10.0'
            } else {
                statName = statName
            }
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
            } else if (statName == 'Hentai') {
                statName = '       Hentai'
            }
            statName = statName.replaceAll(' ', '&nbsp')
            numOfBlocks = (count / graphMax)
            block = ''
            for (n = 0; n < numOfBlocks * 20; n++) {
                block = `${block}=`
            }
            lines.push(`${statName} ${block} (${count})`)
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