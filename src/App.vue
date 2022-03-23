<script lang="ts">
import TheCharacter from "./components/TheCharacter.vue";
import { useCharacterStore } from '@/stores/character';
import { useTraitsStore } from '@/stores/traits';
import { defineComponent } from 'vue'


export default defineComponent({
  components: { TheCharacter },
  setup() {
    const character = useCharacterStore()
    const traits = useTraitsStore()
    return { character, traits }
  },
  mounted() {
    this.character.setAllRandom()
  },
})
</script>

<template>

  <header class="flex flex-row flex-wrap">
        <button 
      class="container mx-auto max-w-md mt-24 text-4xl rounded-full border-2 p-5"
      @click="character.setAllRandom()"
    >
      Random Character
    </button>
  </header>

  <main class="mx-auto max-w-lg mt-14 flex flex-col items-center">
    <the-character 
      :character="character" 
      :traits="traits"
    ></the-character>

  </main>

</template>

<style>

</style>
