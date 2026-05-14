import { defineComponent, ref, computed, watch } from "vue";
import { useVueFlow } from '@vue-flow/core'

export default defineComponent({
  name: '',
  setup(_props, { expose }) {
    const helperLineHorizontal = ref(undefined);
    const helperLineVertical = ref(undefined);
    const horizontal = computed(() => helperLineHorizontal.value);
    const vertical = computed(() => helperLineVertical.value);
    const { viewport, dimensions } = useVueFlow()

    const canvasRef = ref(null)

    const width = computed(() => dimensions.value.width)
    const height = computed(() => dimensions.value.height)

    const x = computed(() => viewport.value.x)
    const y = computed(() => viewport.value.y)
    const zoom = computed(() => viewport.value.zoom)

    function updateCanvasHelperLines() {
      const canvas = canvasRef.value
      const ctx = canvas?.getContext('2d')

      if (!ctx || !canvas) {
        return
      }

      const dpi = window.devicePixelRatio
      canvas.width = width.value * dpi
      canvas.height = height.value * dpi

      ctx.scale(dpi, dpi)
      ctx.clearRect(0, 0, width.value, height.value)
      ctx.strokeStyle = '#00AF79'

      if (typeof vertical.value === 'number') {
        ctx.moveTo(vertical.value * zoom.value + x.value, 0)
        ctx.lineTo(vertical.value * zoom.value + x.value, height.value)
        ctx.stroke()
      }

      if (typeof horizontal.value === 'number') {
        ctx.moveTo(0, horizontal.value * zoom.value + y.value)
        ctx.lineTo(width.value, horizontal.value * zoom.value + y.value)
        ctx.stroke()
      }
    }

    function updateHelperLines(changes, nodes) {
      helperLineHorizontal.value = undefined
      helperLineVertical.value = undefined

      if (changes.length === 1 && changes[0].type === 'position' && changes[0].dragging && changes[0].position) {
        const helperLines = getHelperLines(changes[0], nodes)

        // if we have a helper line, we snap the node to the helper line position
        // this is being done by manipulating the node position inside the change object
        changes[0].position.x = helperLines.snapPosition.x ?? changes[0].position.x
        changes[0].position.y = helperLines.snapPosition.y ?? changes[0].position.y

        // if helper lines are returned, we set them so that they can be displayed
        helperLineHorizontal.value = helperLines.horizontal
        helperLineVertical.value = helperLines.vertical
      }

      return changes
    }
    watch(
      [width, height, x, y, zoom, horizontal, vertical],
      () => updateCanvasHelperLines(),
      { immediate: true, deep: true }
    );
    expose({ updateHelperLines })
    const canvasStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 10,
      pointerEvents: "none",
    }
    return () => (
      <canvas ref={canvasRef} style={canvasStyle} />
    )
  }
});


function getHelperLines(change, nodes, distance = 5) {
  const defaultResult = {
    horizontal: undefined,
    vertical: undefined,
    snapPosition: { x: undefined, y: undefined },
  }
  const nodeA = nodes.find((node) => node.id === change.id)

  if (!nodeA || !change.position) {
    return defaultResult
  }

  const nodeABounds = {
    left: change.position.x,
    right: change.position.x + ((nodeA.dimensions.width) ?? 0),
    top: change.position.y,
    bottom: change.position.y + ((nodeA.dimensions.height) ?? 0),
    width: (nodeA.dimensions.width) ?? 0,
    height: (nodeA.dimensions.height) ?? 0,
  }

  let horizontalDistance = distance
  let verticalDistance = distance

  return nodes
    .filter((node) => node.id !== nodeA.id)
    .reduce((result, nodeB) => {
      const nodeBBounds = {
        left: nodeB.position.x,
        right: nodeB.position.x + ((nodeB.dimensions.width) ?? 0),
        top: nodeB.position.y,
        bottom: nodeB.position.y + ((nodeB.dimensions.height) ?? 0),
        width: nodeB.width ?? 0,
        height: nodeB.height ?? 0,
      }

      //  |‾‾‾‾‾‾‾‾‾‾‾|
      //  |     A     |
      //  |___________|
      //  |
      //  |
      //  |‾‾‾‾‾‾‾‾‾‾‾|
      //  |     B     |
      //  |___________|
      const distanceLeftLeft = Math.abs(nodeABounds.left - nodeBBounds.left)

      if (distanceLeftLeft < verticalDistance) {
        result.snapPosition.x = nodeBBounds.left
        result.vertical = nodeBBounds.left
        verticalDistance = distanceLeftLeft
      }

      //  |‾‾‾‾‾‾‾‾‾‾‾|
      //  |     A     |
      //  |___________|
      //              |
      //              |
      //  |‾‾‾‾‾‾‾‾‾‾‾|
      //  |     B     |
      //  |___________|
      const distanceRightRight = Math.abs(nodeABounds.right - nodeBBounds.right)

      if (distanceRightRight < verticalDistance) {
        result.snapPosition.x = nodeBBounds.right - nodeABounds.width
        result.vertical = nodeBBounds.right
        verticalDistance = distanceRightRight
      }

      //              |‾‾‾‾‾‾‾‾‾‾‾|
      //              |     A     |
      //              |___________|
      //              |
      //              |
      //  |‾‾‾‾‾‾‾‾‾‾‾|
      //  |     B     |
      //  |___________|
      const distanceLeftRight = Math.abs(nodeABounds.left - nodeBBounds.right)

      if (distanceLeftRight < verticalDistance) {
        result.snapPosition.x = nodeBBounds.right
        result.vertical = nodeBBounds.right
        verticalDistance = distanceLeftRight
      }

      //  |‾‾‾‾‾‾‾‾‾‾‾|
      //  |     A     |
      //  |___________|
      //              |
      //              |
      //              |‾‾‾‾‾‾‾‾‾‾‾|
      //              |     B     |
      //              |___________|
      const distanceRightLeft = Math.abs(nodeABounds.right - nodeBBounds.left)

      if (distanceRightLeft < verticalDistance) {
        result.snapPosition.x = nodeBBounds.left - nodeABounds.width
        result.vertical = nodeBBounds.left
        verticalDistance = distanceRightLeft
      }

      //  |‾‾‾‾‾‾‾‾‾‾‾|‾‾‾‾‾|‾‾‾‾‾‾‾‾‾‾‾|
      //  |     A     |     |     B     |
      //  |___________|     |___________|
      const distanceTopTop = Math.abs(nodeABounds.top - nodeBBounds.top)

      if (distanceTopTop < horizontalDistance) {
        result.snapPosition.y = nodeBBounds.top
        result.horizontal = nodeBBounds.top
        horizontalDistance = distanceTopTop
      }

      //  |‾‾‾‾‾‾‾‾‾‾‾|
      //  |     A     |
      //  |___________|_________________
      //                    |           |
      //                    |     B     |
      //                    |___________|
      const distanceBottomTop = Math.abs(nodeABounds.bottom - nodeBBounds.top)

      if (distanceBottomTop < horizontalDistance) {
        result.snapPosition.y = nodeBBounds.top - nodeABounds.height
        result.horizontal = nodeBBounds.top
        horizontalDistance = distanceBottomTop
      }

      //  |‾‾‾‾‾‾‾‾‾‾‾|     |‾‾‾‾‾‾‾‾‾‾‾|
      //  |     A     |     |     B     |
      //  |___________|_____|___________|
      const distanceBottomBottom = Math.abs(nodeABounds.bottom - nodeBBounds.bottom)

      if (distanceBottomBottom < horizontalDistance) {
        result.snapPosition.y = nodeBBounds.bottom - nodeABounds.height
        result.horizontal = nodeBBounds.bottom
        horizontalDistance = distanceBottomBottom
      }

      //                    |‾‾‾‾‾‾‾‾‾‾‾|
      //                    |     B     |
      //                    |           |
      //  |‾‾‾‾‾‾‾‾‾‾‾|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
      //  |     A     |
      //  |___________|
      const distanceTopBottom = Math.abs(nodeABounds.top - nodeBBounds.bottom)

      if (distanceTopBottom < horizontalDistance) {
        result.snapPosition.y = nodeBBounds.bottom
        result.horizontal = nodeBBounds.bottom
        horizontalDistance = distanceTopBottom
      }

      return result
    }, defaultResult)
}