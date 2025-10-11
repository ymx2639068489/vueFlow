import { defineComponent, ref } from "vue";
import Layout from "./layouts";
export default defineComponent({
  name: '',
  props: {
  },
  setup() {
    return () => (
      <Layout />
    )
  }
})