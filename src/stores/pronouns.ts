import { defineStore } from "pinia";

export const usePronounStore = defineStore('pronouns', {
  state: () => ({
      "male": { "subj": "he", "obj": "him", "pos": "his", "be": "is", "s": "s"},
      "female": { "subj": "she", "obj": "her", "pos": "her", "be": "is", "s": "s"},
      "neutral": { "subj": "they", "obj": "them", "pos": "their", "be": "are", "s": ""},
  }),
  getters: {

  },
  actions: {        

  },
});
