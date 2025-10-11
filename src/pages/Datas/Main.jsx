import { defineComponent, ref } from "vue";
import { VueFlow, useVueFlow, MarkerType, useNodeConnections, useNode } from '@vue-flow/core';
import { Background } from '@vue-flow/background';
import { ControlButton, Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import useDragAndDrop from './hooks/useDnD';
import { initialEdges, initialNodes } from './initial-elements.js';
import HelperLines from './component/HelperLines';
import Icon from "./component/Icon";
import { NodeSlots } from "./nodes/data";
export default defineComponent({
  setup() {
    const nodes = ref(initialNodes);
    const edges = ref(initialEdges);
    const helpLineRef = ref(null);
    const { onDragOver, onDragLeave } = useDragAndDrop();
    const { applyNodeChanges, onConnect, toObject, setViewport, addEdges } = useVueFlow();
    // 连线时，添加线的方向
    onConnect((connection) => {
      // console.log(connection)
      addEdges({ ...connection, markerEnd: MarkerType.ArrowClosed, animated: true, })
    });
    // 添加辅助线，在node移动时判断
    function onNodesChange(changes) {
      const updatedChanges = helpLineRef.value.updateHelperLines(changes, nodes.value)
      nodes.value = applyNodeChanges(updatedChanges)
    }
    return () => (
      <div style="height: 100%; width: 100%;">
        <VueFlow
          nodes={nodes.value}
          edges={edges.value}
          v-slots={NodeSlots}
          default-viewport={{ zoom: 1.5 }}
          min-zoom={0.5}
          max-zoom={3}
          onNodesChange={onNodesChange}
          ondragover={onDragOver}
          ondragleave={onDragLeave}
        >
          <HelperLines ref={helpLineRef} />
          <MiniMap></MiniMap>
          <Background gap="150" variant="lines" size="2" pattern-color="#BDBDBD" />
          <Controls position="top-right">
            <ControlButton title="Reset Transform" onClick={() => setViewport({ x: 120, y: 300, zoom: 1.5 })}>
              <Icon name="reset" />
            </ControlButton>
            <ControlButton title="Log `toObject`" onClick={() => console.log(toObject())}>
              <Icon name="log" />
            </ControlButton>
          </Controls>
        </VueFlow>
      </div>
    )
  }
})