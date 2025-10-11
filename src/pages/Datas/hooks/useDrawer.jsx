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
  const { getIncomers } = useVueFlow();

  function openDrawer(__node) {
    try {
      const lnodelist = getIncomers(__node.id);
      // 需要的输入数量对了
      if (lnodelist.length != __node.data.requireNode) {
        throw new Error('请先完成连线');
      }
      // 输入的数据是好的
      if (lnodelist.filter(lnode => !useNodeStateCheck(lnode.id).itemCheck.value).length) {
        throw new Error('前置节点尚未配置成功, 请先配置前置节点')
      }
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