<script lang="ts">
import { usePronounStore } from '@/stores/pronouns';
import { defineComponent } from 'vue'

interface Pronouns {
    subj: string,
    obj: string,
    pos: string,
    be: string,
    is: string,
    s: string
}
interface PronounBank {
    [key: string] : Pronouns;
}

export default defineComponent({
    props: {
        character: Object,
        traits: Object,
    },
    setup() {
        const pronounStore = usePronounStore();
        const pronouns = pronounStore.neutral;
        const aOrAn = "a";
        return { 
            pronounStore,
            pronouns,
            aOrAn
        }
    },
    methods: {

    },
    computed: {        
        setPronounsByGender(): Pronouns {
            return {
                "Man": this.pronounStore.male,
                "Woman": this.pronounStore.female,
                "Agender person": this.pronounStore.neutral,
                "Non-Binary person": this.pronounStore.neutral
            }[this.character?.traits["Gender"]]
        },

        setAOrAnByGender(): string {
            return {
                "Man": "a",
                "Woman": "a",
                "Agender person": "an",
                "Non-Binary person": "a",
            }[this.character?.traits["Gender"]]
        }
    },
    watch: {
       'character.traits.Gender'(newValue) {
           if (newValue) {
               this.pronouns = this.setPronounsByGender
               this.aOrAn = this.setAOrAnByGender
           }
       }
    },
    mounted () {

    },
})
</script>

<template>
    <div clas="">
        <p class="">
            <strong>{{ character?.traits["Name"] }}</strong>'s voice has a Laban Effort of <strong>{{ character?.traits["Laban Effort"] }}</strong>.

            &nbsp;<span class="capitalize">{{ pronouns.subj }}</span>&nbsp;{{ 
            
                pronouns.be + " " + aOrAn + " "}}<strong>{{ character?.traits["Gender"] }}</strong>
            
            who places {{ pronouns.pos }} voice in {{ pronouns.pos }} 
            
            <strong>{{ character?.traits["Placement"] }}</strong>. <span class="capitalize">
            
            {{ pronouns.subj }}</span> {{ pronouns.be }} <strong>{{ character?.traits["Age"] }}</strong>,
                    
            and the air in {{ pronouns.pos }} voice has a <strong>{{ character?.traits["Air Quality"] }}</strong>
                    
            quality.
                
        </p>

        <p class="">

            <span class="capitalize">{{ pronouns.pos }}</span> voice is <strong>{{ character?.traits["Size"] }}</strong>
                    
            in size. <span class="capitalize">{{ pronouns.subj }}</span> speak{{ pronouns.s }} <strong>{{ character?.traits["Volume"] }}</strong>ly,
            
            at a <strong>{{ character?.traits["Tempo"] }}</strong> tempo. <span class="capitalize">
            
            {{ pronouns.pos }}</span> attitude is <strong>{{ character?.traits["Attitude"] }}</strong>, and {{ pronouns.pos }} 
                    
            <strong>{{ character?.traits["Accent"] }}</strong> accent can be heard in everything {{ pronouns.subj }} 
            
            say{{ pronouns.s }}.
        </p>

        <p class="">
            {{ character?.traits["Name"] }}'s vocal issue is 
            
                    <strong>{{ character?.traits["Vocal Issue"] }}</strong>.
        </p>

    </div>
</template>

<style>
    p {
        padding-top: 0rem;
        padding-right: 0rem;
        padding-bottom: 1.75rem;
        padding-left: 0rem;
        line-height: 2.65rem;
        text-indent: 0rem;
        hyphens: auto;
        /* text-justify: auto; */
    }
</style>