<script lang="ts">
import TraitChooserTop from "./components/TraitChooserTop.vue";
import TheCharacter from "./components/TheCharacter.vue";
import { useCharacterStore } from '@/stores/character';
import { useTraitsStore } from '@/stores/traits';

export default {
  components: { TheCharacter, TraitChooserTop },
  setup() {
    const character = useCharacterStore()
    const traits = useTraitsStore()
    return { character, traits }
  },
  mounted() {
    if (Object.values(this.character.traits).some((el) => typeof(el) === "function")) {
      this.character.setAllRandom()
    }
  },
}
</script>

<template>

  <header class="flex flex-row flex-wrap">
    <!--TraitChooserTop
      v-for="(options, trait) in traits.traits"
      :trait="trait"
      :options="options"
      :modelValue="character.traits[trait]"
    /-->
  </header>

  <main class="mx-auto max-w-lg mt-12 flex flex-col items-center">
    <the-character 
      :character="character" 
      :traits="traits"
    ></the-character>
    <button 
      class="container mx-auto max-w-md text-4xl rounded-full border-2 p-5"
      @click="character.setAllRandom()"
    >
      Random Character
    </button>
  </main>

</template>

<style>

</style>
