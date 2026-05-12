import { defineComponent, ref } from "vue";
// import { Position, Handle } from '@vue-flow/core';
import style from './group.module.css'
import { Handle, Position } from '@vue-flow/core'
import { NodeResizer } from '@vue-flow/node-resizer'
export const GroupNode = defineComponent({
  props: {
    id: {
      type: String,
      required: false,
    },
    data: {
      type: Object,
      required: false,
    }
  },
  setup(props, { emit }) {
    console.log(props)
    return () => (
      <>
        <NodeResizer min-width="100" min-height="30" />

        <Handle type="target" position={Position.Left} />
        <div style="padding: 10px">{ props.data.label }</div>
        <Handle type="source" position={Position.Right} />
      </>
      // <ParentNode
      //   check_value={itemCheck.value}
      //   node_id={props.id}
      //   data={props.data}
      // >
      //   <Handle type="target" position={Position.Left} style="opacity: 0" connectable={props.data.requireNode} />
      //   <Handle type="source" position={Position.Right} style="opacity: 0" />
      // </ParentNode>
    )
  }
})