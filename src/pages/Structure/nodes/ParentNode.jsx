import { defineComponent, computed } from "vue";
import Icon from "../component/Icon";
import './node.css';
import { useVueFlow } from '@vue-flow/core';
import useDrawer from "../hooks/useDrawer";

export default defineComponent({
  props: {
    check_value: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
      required: false,
    },
    node_id: {
      type: String,
      required: false,
    },
  },
  setup(props, { emit, slots }) {
    const { findNode } = useVueFlow();
    const node = findNode(props.node_id);
    const { openDrawer } = useDrawer();
    const style = computed(() => {
      const res = {
        height: "80px",
        width: "80px",
        textAlign: "center",
        borderRadius: "15%",
        background: "white",
      }
      if (!props.check_value) return { ...res, border: "1px dashed gray" }
      return { ...res, border: "1px solid gray" }
    });
    // console.log(node)
    const dataFoo = computed(() => props.data?.data || props.data?.label);
    function nodeClick() {
      emit('nodeClick');
      openDrawer(node);
    }
    return () => (
      <div
        style={style.value}
        className="__NODE__"
        onClick={nodeClick}
        data-foo={dataFoo.value}
      >
        <Icon name={props.data.icon} width="60px" height="60px" style="margin: 10px 10px;"/>
        <slots.default></slots.default>
      </div>
    )
  }
})
