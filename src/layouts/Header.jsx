import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "",
  props: {},
  setup() {
    const activeIndex = ref('data')
    const handleSelect = (key, keyPath) => {
      // console.log(key, keyPath)
    }
    return () => (
      <el-menu
        router
        default-active={activeIndex.value}
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        onSelect={handleSelect}
      >
        <el-menu-item index="model">模型</el-menu-item>
        <el-menu-item index="data">数据</el-menu-item>
        <el-sub-menu index="2" disabled>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu index="2-4">
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    );
  },
});
