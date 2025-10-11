import { defineComponent, ref } from "vue";
import { VueFlow } from '@vue-flow/core'

export default defineComponent({
  name: 'canvas',
  props: {
  },
  setup() {
    const nodes = ref([
      {
        id: '1',
        position: { x: 50, y: 50 },
        data: { label: 'Node 1', },
      }
    ]);
    // function addNode() {
    //   const id = Date.now().toString()
      
    //   nodes.value.push({
    //     id,
    //     position: { x: 150, y: 50 },
    //     data: { label: `Node ${id}`, },
    //   })
    // }
    return () => (
      <div>
        <VueFlow nodes={nodes}>
          {/* <button type="button" onClick={addNode}>Add a node</button> */}
        </VueFlow>
      </div>
    )
  }
})