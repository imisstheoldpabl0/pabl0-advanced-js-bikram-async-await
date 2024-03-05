//DESARROLLA AQUI TUS SOLUCIONES

// 1 - Declara una función **getRandomPokemon** que retorne un pokemon aleatorio.

async function getRandomPokemon () {
    
    let pokemonList = await fetch (`https://pokeapi.co/api/v2/pokemon/`) // pillamos la lista total de pokemons
    let data = await pokemonList.json(); // devolvemos la lista total y pasamos a json
    
    let tamano = data.results.length; // declara el tamaño total de results
    let random = Math.ceil(Math.random() * tamano); // se obtiene un numero random entre 1 y el tamaño total (20)
    
    let respuesta2 = await fetch (`https://pokeapi.co/api/v2/pokemon/${random}`); // devuelve un pokemon random
    let resultado2 = await respuesta2.json(); // pasamos a json

    return resultado2;

}


// 2 - Declara una funcion **getImageAndName** que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})

async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}

// 3 - Declara una funcion **printImageAndName** que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:

async function printImageAndName () {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    
    return document.querySelector('body').innerHTML +=
                            `<section>
                                <img src="${img}" alt="${name}">
                                <h1>${name}</h1>
                            </section>`

}

// 4 - Declara una función **getRandomDogImage** que retorne la url de la imagen de un perro aleatorio

async function getRandomDogImage () {
    let response = await fetch ('https://dog.ceo/api/breeds/image/random');
    let data = await response.json();
    let img = data.message;

    return img;
}

// 5 Declara una función **getRandomPokemonImage** que retorne la url de la imagen de un pokemon aleatorio

async function getRandomPokemonImage () {
    let pokemonList = await fetch (`https://pokeapi.co/api/v2/pokemon/`) // pillamos la lista total de pokemons
    let data = await pokemonList.json(); // devolvemos la lista total y pasamos a json
    
    let tamano = data.results.length; // declara el tamaño total de results
    let random = Math.ceil(Math.random() * tamano); // se obtiene un numero random entre 1 y el tamaño total (20)
    
    let respuesta2 = await fetch (`https://pokeapi.co/api/v2/pokemon/${random}`); // devuelve un pokemon random
    let resultado2 = await respuesta2.json(); // pasamos a json

    return resultado2.sprites.front_default;

}

// 6 Declara una función **printPugVsPikachu** que pinte la batalla entre "Pug" y "Pikachu" (no se testea)
async function printPugVsPikachu () {
    let pokemonList = await fetch (`https://pokeapi.co/api/v2/pokemon/pikachu`) // pillamos la lista total de pokemons
    let dataPika = await pokemonList.json(); // devolvemos la lista total y pasamos a json

    imgPika = dataPika.sprites.front_default;

    let pugImages = await fetch (`https://dog.ceo/api/breed/pug/images`) // pillamos la lista total de imgs de pugs
    let dataPug = await pugImages.json(); // devolvemos la lista total y pasamos a json

    imgPug = dataPug.message[0];

    document.querySelector('body').innerHTML +=
                            `<section>
                                <img src="${imgPika}" alt="Pikcachu">
                                <h1>Versus</h1>
                                <img src="${imgPug}" alt="Pug">
                            </section>`

}






// 7 - Declara una función **getRandomCharacter** que retorne un personaje aleatorio.

async function getRandomCharacter () {

    let rickList = await fetch (`https://rickandmortyapi.com/api/character`) // pillamos la lista total de personajes
    let data = await rickList.json(); // devolvemos la lista total y pasamos a json
    
    let tamano = data.results.length; // declara el tamaño total de results
    let random = Math.ceil(Math.random() * tamano); // se obtiene un numero random entre 1 y el tamaño total
    
    let respuesta2 = await fetch (`https://rickandmortyapi.com/api/character/${random}`); // devuelve un pokemon random
    let resultado2 = await respuesta2.json(); // pasamos a json

    return resultado2;

}

// 8 - Declara una función **getRandomCharacterInfo** que retorne de un personaje su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, tendrás que hacer otro fetch para llegar a los ultimos datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})

async function getRandomCharacterInfo () {

        /* RICK SANCHEZ 1 */
        let rickSanchez = await fetch (`https://rickandmortyapi.com/api/character/1`) // pillamos a rick de la lista
        let data = await rickSanchez.json(); // devolvemos a rick y pasamos a json
    
        let img = data.image; // sacamos la imagen
        let name = data.name; // sacamos el nombre
        let episodes = data.episode; // numero de episodios en los que aparece
        let primerEpisodio = data.episode[0];
    
        
        /* EPISODIO 1 */
        let nombrePrimerEpisodio = await fetch (`${primerEpisodio}`)
        let data2 = await nombrePrimerEpisodio.json();
    
        let firstEpisode = data2.name; // nombre del primer episiodio en el que aparece
        let dateEpisode = data2.air_date; // fecha de publicacion de primer episodio
    
    
        return {img, name, episodes, firstEpisode, dateEpisode};

}

// 9 - Pinta los anteriores datos en el DOM (no se testea)
async function pintarEnDom () {
    let data = await getRandomCharacterInfo();
    document.querySelector('body').innerHTML +=
                                    `<section>
                                        <h1>${data.name}</h1>
                                        <img src="${data.img}" alt="Rick Sanchez">
                                        <h3>Episodes: ${data.episodes}</h3>
                                        <h3>First episode: ${data.fir}</h3>
                                        <h4>First episode: ${data.dateEpisode}</h4>`
}
