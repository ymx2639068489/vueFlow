import { defineComponent, ref } from "vue";
import { Position, Handle } from '@vue-flow/core';
import ParentNode from '../ParentNode';

const NodeIcon = 'intersection';
const NodeLabel = 'label';
const ComponentName = 'AddPreson';
const NodeComponent = defineComponent({
  props: {
    id: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const check_value = ref(false);
    function nodeClick() {
      check_value.value = !check_value.value
    }
    return () => (
      <ParentNode
        check_value={check_value.value}
        onNodeClick={nodeClick}
        node_id={props.id}
      >
        <Handle type="target" position={Position.Left} style="opacity: 0" />
        <Handle type="source" position={Position.Right} style="opacity: 0" />
      </ParentNode>
    )
  }
});

function DrawerComponent() {
  return (
    <>
      add field drawer
    </>
  )
}
export default {
  ComponentName,
  NodeComponent,
  DrawerComponent,
  NodeIcon,
  NodeLabel,
}