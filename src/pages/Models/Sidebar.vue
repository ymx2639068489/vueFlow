<script setup>
import useDragAndDrop from './useDnD'
const { onDragStart } = useDragAndDrop()


const nodes = [
  {
    class: 'node-item node-item-input',
    type: 'inputnode',
    label: '输入',
  },
  {
    class: 'node-item node-item-output',
    type: 'outputnode',
    label: '输出',
  },
  {
    class: 'node-item node-item-filter',
    type: 'filternode',
    label: '过滤',
  },
  {
    class: 'node-item node-item-distince',
    type: 'distincenode',
    label: '去重',
  },
]


</script>

<template>
  <aside>
    <div class="description">You can drag these nodes to the pane.</div>

    <div class="__nodes__">
      <div
        v-for="item in nodes"
        :key="item.type"
        :class="item.class"
        :draggable="true"
        @dragstart="onDragStart($event, item.type)"
      >
        {{ item.label }}
      </div>
    </div>
  </aside>
</template>

<style scoped>
.node-item {
  display: inline-block;
  margin: 20px;
}
</style>