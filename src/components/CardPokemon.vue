<template>
  <q-card style='height: 25rem; width: 20rem;'>
    <q-img :src="sprite" >
      <div class="absolute-bottom text-h6 justify-between">
        {{ name }} <div> {{ id }} </div>
      </div>
    </q-img>

    <q-card-section>
      <div>
        
      </div>

      <div>

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
  }
})
</script>
