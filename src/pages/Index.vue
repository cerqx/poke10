<template>
  <q-page class="flex flex-center bg-dark" >
    <q-scroll-area
      style="width: 80vw; height: 84.7vh; margin: 0 auto; margin-top: 5rem;"
      :thumb-style="thumbStyle"
    >
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-gap: 2rem 3rem; padding-bottom: 3rem;">
        <CardPokemon
          v-for="pokemon in pokemonsList"
          :key='pokemon.id'
          v-bind='pokemon'
        />
      </div>
    </q-scroll-area>
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
      thumbStyle: {
        right: '4px',
        borderRadius: '7px',
        backgroundColor: 'rgb(175, 37, 37)',
        width: '0.5rem',
        opacity: 0.75
      },
    }
  },
  methods: {
    getPokemons () {
      pokemonService.getAllPokemons().then(response => {
        // this.pokemons = [];
        response.data.results.map(result => {
          api.get(result.url).then(res => {
            this.pokemons.push(res.data)
            this.pokemonsList.push({
              id: res.data.id,
              order: res.data.order,
              name: res.data.name,
              abilities: res.data.abilities,
              sprite: res.data.sprites.front_default,
              types: res.data.types
            })
            this.pokemonsList.sort(function(a, b) {
                return a.id - b.id;
            });
          })
        })

        console.log(this.pokemonsList)
      })
    }
  }
})
</script>




