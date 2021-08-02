<template>
  <q-page class="flex flex-center bg-dark" >
    <CardPokemon
      v-for="pokemon in pokemonsList"
      :key='pokemon.id'
      v-bind='pokemon'
    />
  </q-page>
</template>

<script>
import api from 'src/common/api';
import { defineComponent } from 'vue';
import CardPokemon from '../components/CardPokemon.vue';
import { pokemonService } from '../services';

export default defineComponent({
  name: 'PageIndex',
  components: {
    CardPokemon
  },
  created: function () {
    this.getPokemons()
  },  
  data () {
    return {
      pokemonsList: [],
      pokemons: [],
    }
  },
  methods: {
    getPokemons () {
      pokemonService.getAllPokemons().then(response => {
        // this.pokemons = [];
        response.data.results.map(result => {
          api.get(result.url).then(res => {
            this.pokemons.push(res.data)
          })
        });
      })
    
    this.listPokemons()
    },
        
    listPokemons () {
       this.pokemons.map(pokemon => {
            this.pokemonsList.push({
            id: pokemon.id,
            order: pokemon.order,
            name: pokemon.name,
            abilities: pokemon.abilities,
            sprite: pokemon.sprites.front_default,
            types: pokemon.types
          })
        })
        console.log(this.pokemonsList)
    }
       
  }
})
</script>




