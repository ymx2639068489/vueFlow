import { defineComponent } from "vue";
import useDrawer from '../hooks/useDrawer';

export default defineComponent({
  setup(props) {
    const { dialog, DrawerBody } = useDrawer();

    return () => (
      <div>
        <el-drawer
          v-model={dialog.value}
          append-to-body
          destroy-on-close
          title="I have a nested form inside!"
          direction="rtl"
          class="demo-drawer"
        >
          <DrawerBody />
        </el-drawer>
      </div>
    )
  }
});