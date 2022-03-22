import { defineStore } from "pinia";
import { useTraitsStore } from './traits';

export const useCharacterStore = defineStore('character', {
  state: () => ({
    traits: {
      "Name": String,
      "Laban Effort": String,
      Placement:  String,
      "Air Quality":  String,
      Age:  String,
      Gender:  String,
      Size:  String,
      Tempo:  String,
      Volume:  String,
      Attitude:  String,
      Accent: String,
      "Vocal Issue": String,
    },
  }),
  getters: {
  },
  actions: {
    setTrait(trait, value) {
      this.traits[trait] = value;
    },
    setRandom(trait) {
      const traitStore = useTraitsStore()
      this.traits[trait] = traitStore.retrieveRandom(trait)
    },
    setAllRandom() {
      const traitStore = useTraitsStore()
      for (const [trait, value] of Object.entries(this.traits)) {
          this.traits[trait] = traitStore.retrieveRandom(trait)
      }
        
    }
  },
});
