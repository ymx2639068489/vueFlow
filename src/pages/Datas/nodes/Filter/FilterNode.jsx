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
    data: {
      type: Object,
      required: false,
    }
  },
  setup(props) {
    const { itemCheck } = useNodeStateCheck(props.id);
    return () => (
      <ParentNode
        check_value={itemCheck.value}
        node_id={props.id}
        data={props.data}
      >
        <Handle type="target" position={Position.Left} style="opacity: 0" connectable={props.data.requireNode} />
        <Handle type="source" position={Position.Right} style="opacity: 0" />
      </ParentNode>
    )
  }
})