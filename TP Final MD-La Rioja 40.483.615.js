// Importamos nuestro array
const data = require('./movies')

// Ejecucion



/* Cantidad de películas por cada año */



const moviesPerYear = () => {
    let perYear = data.reduce((acum, movie)=>{
        if (acum[movie.Year]) {
            acum[movie.Year]++
        }
        else{
            acum[movie.Year]=1
        }
        return acum
    },{})
    return perYear
}  
    console.log(moviesPerYear()) 



/* - Generar un nuevo array con los títulos de las películas */



const moviesPerTitle = () => {
    titles = []
    data.forEach((e)=> {
        titles.push(e.Title)
    })
    return titles
}

console.log(moviesPerTitle())



/* Cantidad total de imágenes de todas las películas */



const moviesPerImages = () => {
    let images = [];
    let sum = 0;
    let perImages = data.map((e)=> {
      images.push(e.Images.length)
    })
    for (let i = 0; i<images.length; i++){
      sum += images[i];
    }
    console.log(`En total hay ${sum} imagenes`)
    return perImages
  }

  moviesPerImages()


  
/* Cantidad de películas que todavía no salieron */
  


  const moviesComingSoon = () => {
    coming = []
    let percoming = data.map((e)=> {
    if (e.ComingSoon == true)
    coming.push(e)
    }) 
    console.log(`Faltan ${coming.length} peliculas por estrenar`)
    return coming
}



/* Porcentaje de películas que todavía no salieron (validar el campo ComingSoon: true) */



const moviesPerCent = () => {
    return  moviesComingSoon().length * 100 / data.length 
}
console.log(`El porcentaje de peliculas que faltan es del ${moviesPerCent()}%`)