import { defineComponent } from "vue";
import Aside from './Aside';
import Main from './Main';
import useDragAndDrop from './hooks/useDnD';
import Drawer from "./component/Drawer";
export default defineComponent({
  setup() {
    const style = { height: 'calc(100vh - 60px)', };
    const { onDrop } = useDragAndDrop();
    return () => (
      <el-container  style={style} ondrop={onDrop}>
        <el-aside width="200px" style="border: 1px solid #000">
          <Aside />
        </el-aside>
        <el-main>
          <Drawer />
          <Main />
        </el-main>
      </el-container>
    )
  }
})