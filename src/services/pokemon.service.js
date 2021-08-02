import api from '../common/api'

var urlAPI = 'https://pokeapi.co/api/v2'

export const pokemonService = {
    getAllPokemons,
    getPokemon
}

function getAllPokemons () {
    return api.get(`${urlAPI}/pokemon?limit=20`)
}


function getPokemon (name) {
    return api.get(`${urlAPI}/pokemon/${name}`)
}

