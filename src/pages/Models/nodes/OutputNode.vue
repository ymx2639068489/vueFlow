<template>
  <ParentNode
    :check_value="check_value"
    @node-click="nodeClick"
    class="node-item-output"
  >
    <div>输出</div>
    <Handle type="target" :position="Position.Left" style="opacity: 0" />
  </ParentNode>
</template>

<script setup>
import ParentNode from './ParentNode.vue';
import { Position, Handle } from '@vue-flow/core';
import { ref } from 'vue';

const check_value = ref(false);
function nodeClick() {
  check_value.value = !check_value.value
}
</script>

<style>
</style>
