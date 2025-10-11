<script setup>
import { defineEmits, defineProps } from 'vue'
const props = defineProps({
  check_value: {
    type: Boolean,
    required: true,
  }
});

const emit = defineEmits(['nodeClick']);
</script>

<template>
  <div
    class="node-item"
    :class="{ 'node_check': !check_value, 'node_checked': check_value }"
    @click="() => emit('nodeClick')"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.node_check {
  border: 1px dashed gray;
}
.node_checked {
  border: 1px solid gray;
}
</style>