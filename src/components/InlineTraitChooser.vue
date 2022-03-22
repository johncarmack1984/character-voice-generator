<script lang="ts">
// import { useCharacterStore } from '@/stores/character';

export default {
  props: ['trait'],
  setup() {
    /* character = useCharacterStore()
    return {
      character,
    } */
  },
  methods: {
    /* updateTrait(event) {
      // this.trait = event?.target.value; 
    } */
  }
}
</script>

<template>

-- {{ trait }} - value --

  <!--select 
      v-model="character.traits[trait]" 
      class="border-2 border-black p-1"     
  > 
      <option 
          v-for="option in 
          traits.traits[trait]"
          :value="option"
      >
          {{ option }}
      </option>
  </select-->

</template>

<style scoped>

</style>


  <!--@change="updateTrait($event)"-->
