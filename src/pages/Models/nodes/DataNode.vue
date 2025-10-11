<template>
  <ParentNode
    :check_value="check_value"
    @node-click="nodeClickHandler"
  >
    <div>数据</div>
    <Handle type="source" :position="Position.Right" style="opacity: 0" />
  </ParentNode>
</template>

<script setup>
import ParentNode from './ParentNode.vue';
import { Position, Handle } from '@vue-flow/core';
import { ref } from 'vue';
const check_value = ref(true);
function nodeClickHandler() {
  check_value.value = !check_value.value
}

</script>

<style scoped>

</style>
