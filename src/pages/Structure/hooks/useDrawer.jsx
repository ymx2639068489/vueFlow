import { defineComponent, ref } from 'vue';
import { nodeDrawerCpm } from '../nodes/data';
import { useVueFlow } from '@vue-flow/core';
import { useNodeStateCheck } from './useNodeConfig';
import { ElMessage } from "element-plus";
const state = {
  node: ref(null),
  dialog: ref(false),
};

export default function() {
  const { node, dialog } = state;

  function openDrawer(__node) {
    try {
      // 可以配置当前node数据
      node.value = __node;
      dialog.value = true;
    } catch (error) {
      ElMessage({ type: 'warning', message: error });
    }
  }
  function closeDrawer() {
    dialog.value = false;
    node.value = null;
  }
  const DrawerBody = defineComponent({
    setup() {
      if (nodeDrawerCpm[node.value.type]) {
        const Temp = nodeDrawerCpm[node.value.type];
        return () => <Temp node={node.value} />;
      }
      return () => <>Error</>
    }
  });
  return {
    dialog,
    node,
    openDrawer,
    closeDrawer,
    DrawerBody,
  }
}