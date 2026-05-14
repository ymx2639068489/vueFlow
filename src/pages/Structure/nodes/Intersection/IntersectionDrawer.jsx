import { defineComponent } from "vue";
import { useNodeStateCheck } from '../../hooks/useNodeConfig';

export const IntersectionDrawer = defineComponent ({
  props: {
    node: {
      type: Object,
      required: false,
    },
  },
  setup(props) {
    const { checkToTrue, checkToFalse, } = useNodeStateCheck(props.node.id)
    return () => (
      <>
        <el-button onClick={() => checkToTrue()}>sure</el-button>
        <el-button onClick={() => checkToFalse()}>close</el-button>
      </>
    )
  }
  
})