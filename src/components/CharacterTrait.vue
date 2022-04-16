<template>
  <span>
      check
    <transition name="slide-fade" mode="out-in">check</transition>
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  key: String,
});
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
