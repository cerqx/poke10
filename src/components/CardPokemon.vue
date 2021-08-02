<template>
  <q-card style='width: 20rem;' class="bg-info">
    <q-img :src="sprite" >
      <div style="background-color: rgb(114, 20, 20, 0.5)" class="absolute-bottom row text-h6 justify-between">
        <div class="column justify-center items-start">
          {{ capitalize(name) }}
          <div class="row" style="gap: 0.3rem">
            <q-card :key="type.type.name" v-for="type in types" :style="`font-size: 0.7rem; padding: 0 0.5rem; background-color: ${backgroundColor(type.type.name)}`">
              {{ capitalize(type.type.name) }}
            </q-card>
          </div>
        </div>

        <div>
          {{ id }}
        </div>
      </div>
    </q-img>
    <q-card-section>
      <div class="row items-center justify-center" style="gap: 1rem">
        <q-card :key="ability.ability.name" class="bg-dark row items-center justify-center" style="padding: 0.4rem 1rem; font-size: 1rem;" v-for="ability in abilities">
          {{ capitalize(ability.ability.name) }}
        </q-card>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardPokemon',
  props: {
    id: {
      type: Number,
      required: true
    },
    
    order: {
      type: Number,
      required: true
    },
    
    name: {
      type: String,
      required: true
    },

    abilities: {
      type: Object,
      required: true
    },

    sprite: {
      type: String,
      required: true
    },

    types: {
      type: Object,
      required: true
    }
  },
  methods: {
    capitalize (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    backgroundColor (name) {
      if (name === 'normal') {
        return '#a5a690'
      }
      if (name === 'grass') {
        return '#33bd3c'
      }
      if (name === 'fire') {
        return '#b01313'
      }
      if (name === 'water') {
        return '#1c82d6'
      }
      if (name === 'flying') {
        return '#8adaf2'
      }
      if (name === 'poison') {
        return '#bd08c7'
      }
      if (name === 'dark') {
        return '#1a1819'
      }
      if (name === 'psychic') {
        return '#e83ad4'
      }
      if (name === 'rock') {
        return '#ad7617'
      }
      if (name === 'ground') {
        return '#7d4206'
      }
      if (name === 'eletric') {
        return '#ffe208'
      }
      if (name === 'steel') {
        return '#919191'
      }
      if (name === 'dragon') {
        return '#c048e8'
      }
      if (name === 'fairy') {
        return '#e68cde'
      }
      if (name === 'fighting') {
        return '#9c4c4c'
      }
      if (name === 'bug') {
        return '#a2c761'
      }
      if (name === 'ice') {
        return '#a5def0'
      }
    }
  }
})
</script>
