import { defineComponent, ref } from "vue";

import LayoutHeader from './Header'

export default defineComponent({
  name: '',
  props: {
  },
  setup() {
    return () => (
      <div class="common-layout">
        <el-container>
          <el-header style="margin: 0;padding: 0; height: 60px;">
            <LayoutHeader />
          </el-header>
          <el-container>
            <el-main style="margin: 0;padding: 0;"><RouterView /></el-main>
          </el-container>
        </el-container>
      </div>
    )
  }
})

