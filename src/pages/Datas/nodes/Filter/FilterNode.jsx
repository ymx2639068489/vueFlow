import { defineComponent, ref } from "vue";
import { Position, Handle } from '@vue-flow/core';
import ParentNode from '../ParentNode';
import { useNodeStateCheck } from '../../hooks/useNodeConfig'
export const FilterNode = defineComponent({
  props: {
    id: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const { itemCheck } = useNodeStateCheck(props.id);
    return () => (
      <ParentNode
        check_value={itemCheck.value}
        onNodeClick={nodeClick}
        node_id={props.id}
      >
        <Handle type="target" position={Position.Left} style="opacity: 0" />
        <Handle type="source" position={Position.Right} style="opacity: 0" />
      </ParentNode>
    )
  }
})