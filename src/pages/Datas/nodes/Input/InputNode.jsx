import { defineComponent, ref } from "vue";
import { Position, Handle } from '@vue-flow/core';
import ParentNode from '../ParentNode';
import { useNodeStateCheck } from '../../hooks/useNodeConfig';
export const InputNode = defineComponent({
  props: {
    id: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    // 输入表，不需要配置。在左侧选择拖拽过来即可
    const { checkToTrue } = useNodeStateCheck(props.id);
    checkToTrue();
    return () => (
      <ParentNode
        check_value={true}
        node_type="InputNode"
        data={props.data}
        node_id={props.id}
      >
        <Handle type="source" position={Position.Right} style="opacity: 0" />
      </ParentNode>
    )
  }
})