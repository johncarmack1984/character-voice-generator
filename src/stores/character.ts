import { defineStore } from "pinia";
import { useTraitsStore } from './traits';


export interface CharacterTraits {
  [key: string]: string;
}

interface RootCharacterState {
  traits: CharacterTraits;
  setAllRandom(): void;
}

export const useCharacterStore = defineStore('character', {
  state: () => ({
    traits: {
      "Name": String,
      "Laban Effort": String,
      "Placement": String,
      "Air Quality": String,
      "Age": String,
      "Gender": String,
      "Size": String,
      "Tempo": String,
      "Volume": String,
      "Attitude": String,
      "Accent": String,
      "Vocal Issue": String,
    },
  }) as unknown as RootCharacterState,
  getters: {
  },
  actions: {
    setTrait(trait: string, value: string) {
      this.traits[trait] = value;
    },
    setRandom(trait: string) {
      const traitStore = useTraitsStore()
      this.traits[trait] = traitStore.retrieveRandom(trait)
    },
    setAllRandom() {
      const traitStore = useTraitsStore()
      for (const [trait] of Object.entries(this.traits)) {
          this.traits[trait] = traitStore.retrieveRandom(trait)
      }
        
    }
  },
});
