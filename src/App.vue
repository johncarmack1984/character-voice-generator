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

  <header class="text-center">
        <button 
      class="container mx-auto max-w-sm md:max-w-md mt-24 text-4xl rounded-full border-2 p-5"
      @click="character.setAllRandom()"
    >
      Random Character
    </button>
  </header>

  <main class="mx-auto max-w-sm md:max-w-md mt-14 flex flex-col items-center">
    <the-character 
      :character="character" 
      :traits="traits"
    ></the-character>

  </main>

  <footer class="container mx-auto max-w-sm md:max-w-md center text-center pt-10">
    <a class="underline" target="new" href="https://github.com/johncarmack1984/character-voice-generator">Character Voice Generator</a> 
    by <a class="underline" href="https://github.com/johncarmack1984/">John Carmack</a>
  </footer>

</template>

<style>

</style>
