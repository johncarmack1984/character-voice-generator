import { stringifyStyle } from "@vue/shared";
import { defineStore } from "pinia";

export interface OptionList {
  length: number;
  [index: number]: string
};
export interface TraitsBlob {
  [key: string]: OptionList;
}

export const useTraitsStore = defineStore('traits', {
  state: () => ({
    traits: {
      "Name": [
        "Herman Tomfoolery",
        "Bickering Karlstobber the Fourth",
        "Northridge Valpartment",
        "Bee, an Actual Bee, Comma Bee",
        "Gol Den Retriever",
        "Beet Farm",
        "Northen Oppenheim",
        "Billibar of Southduke",
        "Bandford Situation",
        "Bark Phoenix"          
      ],
      "Laban Effort": [
        'Dabbing (Sudden, direct & light)','Flicking (Sudden, indirect & light)',
        'Pressing (Sustained, direct & strong)','Thrusting (Sudden, direct & strong)',
        'Gliding (Sustained, direct & light)','Floating (Sustained, indirect & light)',
        'Wringing (Sustained, indirect & strong)','Slashing (Sudden, indirect & strong)'        
      ],
      Placement: [
        'Nose','Throat','Chest',              
      ],
      "Air Quality": [
        'Breathy','Dry',
      ],
      Age: [
        'Young','Middle aged','Old',
      ],
      Gender: [
        'Woman','Man','Non-Binary person','Agender person',
      ],
      Size: [
        'Small','Medium','Large',
      ],
      Tempo: [
        'Slow','Medium','Fast',
      ],
      Volume: [
      'Quiet','Medium Loud','Loud',
      ],
      Attitude: [
        'Friendly','Impartial','Agressive',
      ],
      Accent: [
        'Texas','Oklahoma',
        'Kentucky','General American',
        'General American','Southern California',
        'Scottish','Northern England','Cockney','Welsh'
      ],
      "Vocal Issue": [
      'Raspy','Lisp','Mumbler','None',
      ],
    },
  }),
  getters: {
  },
  actions: {
    retrieveRandom(trait: string) {
      const traits: TraitsBlob = this.traits
      const options: OptionList = traits[trait] 
      return options[Math.floor(Math.random()* options.length)]
    }
  },
});
