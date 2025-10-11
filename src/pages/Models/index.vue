<script setup>
import HelperLines from './HelperLines.vue'
import { getHelperLines } from './utils'
import { ref, markRaw  } from 'vue'
import { VueFlow, useVueFlow, MarkerType } from '@vue-flow/core'
import DropzoneBackground from './DropzoneBackground.vue';
import { MiniMap } from '@vue-flow/minimap'
import { initialEdges, initialNodes } from './data'
import { ControlButton, Controls } from '@vue-flow/controls'
import Icon from './Icon.vue'
import Sidebar from './Sidebar.vue'
import useDragAndDrop from './useDnD'
import DistinceNode from './nodes/DistinceNode.vue'
import DataNode from './nodes/DataNode.vue'
import OutputNode from './nodes/OutputNode.vue'
import FilterNode from './nodes/FilterNode.vue'
const nodeTypes = {
  inputnode: markRaw(DataNode),
  outputnode: markRaw(OutputNode),
  filternode: markRaw(FilterNode),
  distincenode: markRaw(DistinceNode)
}

const edges = ref(initialEdges);
const nodes = ref(initialNodes);

const { onInit, addEdges, setViewport, toObject, onNodeDragStop, onConnect, applyNodeChanges } = useVueFlow();
const helperLineHorizontal = ref(undefined)
const helperLineVertical = ref(undefined)

const { onDragOver, onDrop, onDragLeave, isDragOver } = useDragAndDrop()

function updateHelperLines(changes, nodes) {
  helperLineHorizontal.value = undefined
  helperLineVertical.value = undefined

  if (changes.length === 1 && changes[0].type === 'position' && changes[0].dragging && changes[0].position) {
    const helperLines = getHelperLines(changes[0], nodes)

    // if we have a helper line, we snap the node to the helper line position
    // this is being done by manipulating the node position inside the change object
    changes[0].position.x = helperLines.snapPosition.x ?? changes[0].position.x
    changes[0].position.y = helperLines.snapPosition.y ?? changes[0].position.y

    // if helper lines are returned, we set them so that they can be displayed
    helperLineHorizontal.value = helperLines.horizontal
    helperLineVertical.value = helperLines.vertical
  }

  return changes
}
onInit((vueFlowInstance) => {
  // instance is the same as the return of `useVueFlow`
  vueFlowInstance.fitView()
})

onNodeDragStop(({ event, nodes, node }) => {
  console.log('Node Drag Stop', { event, nodes, node })
})
function onNodesChange(changes) {
  const updatedChanges = updateHelperLines(changes, nodes.value)
  nodes.value = applyNodeChanges(updatedChanges)
}
onConnect((connection) => {
  console.log(connection)
  addEdges({ ...connection, markerEnd: MarkerType.ArrowClosed })
})

/**
 * toObject transforms your current graph data to an easily persist-able object
 */
function logToObject() {
  console.log(toObject())
}

/**
 * Resets the current viewport transformation (zoom & pan)
 */
function resetTransform() {
  setViewport({ x: 120, y: 300, zoom: 1.5 })
}

</script>

<template>

  <div style="height: 800px; width: 90vw;" @drop="onDrop">
    <Sidebar />
    <VueFlow
      :nodes="nodes"
      :node-types="nodeTypes"
      :edges="edges"
      :default-viewport="{ zoom: 1.5 }"
      :min-zoom="0.2"
      :max-zoom="4"
      @nodes-change="onNodesChange"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
    >
      <HelperLines :horizontal="helperLineHorizontal" :vertical="helperLineVertical" />
      <DropzoneBackground
        :style="{
          backgroundColor: isDragOver ? '#e7f3ff' : 'transparent',
          transition: 'background-color 0.2s ease',
        }"
      >
        <p v-if="isDragOver">Drop here</p>
      </DropzoneBackground>
      <MiniMap></MiniMap>
      <Controls position="top-right">
        <ControlButton title="Reset Transform" @click="resetTransform">
          <Icon name="reset" />
        </ControlButton>
        <ControlButton title="Log `toObject`" @click="logToObject">
          <Icon name="log" />
        </ControlButton>
      </Controls>
    </VueFlow>
  </div>
</template>

<style lang="css">
.node-item {
  height: 80px;
  width: 80px;
  text-align: center;
  line-height: 80px;
  border-radius: 15%;
  border: 1px solid gray;
}
</style>