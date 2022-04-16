<script lang="ts">
import TheCharacter from "./components/TheCharacter.vue";
import TheFooter from "./components/TheFooter.vue";
import { useCharacterStore } from "@/stores/character";
import { useTraitsStore } from "@/stores/traits";
import { defineComponent } from "vue";

export default defineComponent({
  components: { TheCharacter, TheFooter },
  setup() {
    const character = useCharacterStore();
    const traits = useTraitsStore();
    return { character, traits };
  },
  mounted() {
    this.character.setAllRandom();
  },
});
</script>

<template>
  <div class="my-8 container mx-auto leading-10">
    <the-character
      class="px-8 text"
      :character="character"
      :traits="traits"
    ></the-character>
    <div class="text-center">
      <button
        class="mt-[3rem] px-8 py-4 border-2 border-solid border-black rounded-full"
        @click="character.setAllRandom()"
      >
        Generate Random Character
      </button>
    </div>
    <the-footer class="text-center mt-[5rem]"> </the-footer>
  </div>
</template>
