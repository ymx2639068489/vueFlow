import { defineComponent, ref, reactive } from "vue"
import { useNodeStateCheck } from "../../hooks/useNodeConfig";
import useDrawer from '../../hooks/useDrawer';
import { useVueFlow } from "@vue-flow/core";
export const OutputDrawer = defineComponent({
  props: {
    node: {
      type: Object,
      required: false,
    }
  },
  setup({ node }) {
    const ruleFormRef = ref(null);
    const { closeDrawer } = useDrawer();
    const { updateNodeData } = useVueFlow();
    const ruleForm = reactive({
      tableName: '',
    });
    const { checkToTrue, checkToFalse } = useNodeStateCheck(node.id)
    const rules = reactive({
      tableName: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' },
      ]
    });
    const submitForm = async (formEl) => {
      if (!formEl) return;
      await formEl.validate((valid) => {
        if (valid) {
          closeDrawer();
          checkToTrue();
          updateNodeData(node.id, { data: ruleForm.tableName })
        }
        else checkToFalse();
      });
    };

    const resetForm = (formEl) => {
      if (!formEl) return;
      formEl.resetFields();
      checkToFalse();
    };
    return () => (
      <el-form
        ref={ruleFormRef}
        style="max-width: 600px"
        model={ruleForm}
        rules={rules}
        label-width="auto"
      >
        <el-form-item label="Activity name" prop="tableName">
          <el-input v-model={ruleForm.tableName} />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" onClick={() => submitForm(ruleFormRef.value)}>
            Create
          </el-button>
          <el-button onClick={() => resetForm(ruleFormRef.value)}>Reset</el-button>
        </el-form-item>
      </el-form>
    )
  }
})