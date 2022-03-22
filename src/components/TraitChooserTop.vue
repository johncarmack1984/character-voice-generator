<script lang="ts">
export default {
  props: {
    trait: String,
    options: Array,
    modelValue: String
  },
  emits: ['update:modelValue'],
}
</script>

<template>
  <div class="flex flex-col p-2">
    <label>
      {{ trait }}
    </label>
    <select class="w-fit border-2 p-1" 
      :size="options.length+1" 
      v-model="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option disabled value="">
        Please select one...
      </option>
      <option 
        v-for="option in options"
        :value="option"
      >
      {{ option }}
      </option>
    </select>
  </div>
</template>

<style scoped>

</style>
