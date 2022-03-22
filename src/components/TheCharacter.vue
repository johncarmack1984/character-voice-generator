<script lang="ts">
import InlineTraitChooser from "./InlineTraitChooser.vue";

export default {
    data() {
        return {
            "pronouns": {
                'subj': 'they',
                'obj': 'them',
                'pos': 'their',
                'be': 'are',
                'aOrAn': 'a'
            },
        }
    },
    props: {
        character: Object,
        traits: Object,
    },
    components: { 
        InlineTraitChooser 
    },
    methods: {
        subjectivePronoun() {},
        subjectiveBe() {},
        aOrAn() {},
        getPronouns(gender) {
            return { 
                'Man':  {
                    'subj': 'He',
                    'be': {
                        'subj': 'He is'
                    }
                },
                'Woman': {
                    'subj': 'she',
                    'be': {
                        'subj': 'She is'
                    }
                },
                'Non-Binary person': {
                    'subj': 'they',
                    'be': {
                        'subj': 'They are',
                    }
                },
                'Agender person': {
                    'subj': 'they',
                    'be': {
                        'subj': 'They are',
                    }
                },
            }
        }
    },
    watch: {
       
    },
    computed: {        
        /* pronouns(gender) {
            return { 
                'Man':  {
                    'subj': 'He',
                    'be': {
                        'subj': 'He is'
                    }
                },
                'Woman': {
                    'subj': 'she',
                    'be': {
                        'subj': 'She is'
                    }
                },
                'Non-Binary person': {
                    'subj': 'they',
                    'be': {
                        'subj': 'They are',
                    }
                },
                'Agender person': {
                    'subj': 'they',
                    'be': {
                        'subj': 'They are',
                    }
                },
            }
        } */

    },
    mounted () {
        console.log(this.getPronouns(this.character.traits["Gender"])[this.character.traits["Gender"]])
    },
    setup() {

    }
}
</script>

<template>
    <div clas="">
        <p class="py-[2rem] leading-10 indent-0">
            {{ character.traits["Name"] }}'s voice has a Laban Effort of 
                

                {{ character.traits["Laban Effort"] }}.
                <!--select 
                    v-model="character.traits['Laban Effort']" 
                    class="border-2 border-black p-1"
                    
                > 
                    <option 
                        v-for="option in 
                        traits.traits['Laban Effort']"
                        :value="option"
                    >
                        {{ option }}
                    </option>
                </select-->
                <!--inline-trait-chooser trait="Laban Effort" /-->
                <!--inline-trait-chooser 
                        :value="character.traits['Laban Effort']" 
                        :options="traits.traits['Laban Effort']"
                        @set-trait="setTrait"
                /-->

            <!--{{ pronouns()[character.traits["Gender"]].be.subj }}-->
            &nbsp;<span class="capitalize">
                {{ pronouns.subj }}
            </span> {{ pronouns.be + " " + pronouns.aOrAn + " " + character.traits["Gender"] }}
                    
            who places {{ pronouns.pos }} voice in {{ pronouns.pos }}
            
                    {{ character.traits["Placement"] }}.
                    
            <span class="capitalize">{{ pronouns.subj }}</span> are 
            
                    {{ character.traits["Age"] }},
                    
            and the air in {{ pronouns.pos }} voice has a 
            
                    {{ character.traits["Air Quality"] }}
                    
            quality.
                
        </p>
        <p class="py-[2rem] leading-10 indent-0">
            <span class="capitalize">{{ pronouns.pos }}</span> voice is 

                    {{ character.traits["Size"] }}
                    
            in size, and {{ pronouns.subj }} speak at a 
            
                    {{ character.traits["Tempo"] }}
                    
            tempo, with a 
            
                    {{ character.traits["Volume"] }}
                    
            volume. <span class="capitalize">{{ pronouns.pos }}</span> attitude is 
            
                    {{ character.traits["Attitude"] }},
                    
            and {{ pronouns.pos }} 
                    
                    {{ character.traits["Accent"] }}
                    
            accent can be heard in everything {{ pronouns.subj }} say.
        </p>
        <p class="py-[2rem] leading-10 indent-0">
            {{ character.traits["Name"] }}'s vocal issue is 
            
                    {{ character.traits["Vocal Issue"] }}.
        </p>
    </div>
</template>
