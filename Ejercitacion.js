// Importamos nuestro array
const movies = require('./movies')

// Ejecucion

/* Cantidad de películas por cada año */

const moviesPerYear = () => {
    let perYear = movies.map((e) => {
        console.log(e.Year)
    })
    return perYear
}

moviesPerYear() 
