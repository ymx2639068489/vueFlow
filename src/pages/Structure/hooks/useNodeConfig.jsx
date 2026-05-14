import { ref } from 'vue';
import { useVueFlow } from '@vue-flow/core'
const check = {}

export function useNodeStateCheck(nodeId) {
  const { getConnectedEdges } = useVueFlow();
  if (check[nodeId] == undefined) {
    check[nodeId] = ref(false);
  }
  const itemCheck = check[nodeId];

  function __switchAnimated__(animated) {
    getConnectedEdges(nodeId).forEach(edge => {
      if (edge.source == nodeId) return;
      edge.animated = animated;
    });
  }

  function checkToTrue() {
    __switchAnimated__(false);
    itemCheck.value = true;
  }
  function checkToFalse() {
    __switchAnimated__(true);
    itemCheck.value = false;
  }
  return {
    itemCheck,
    checkToTrue,
    checkToFalse,
  }
}