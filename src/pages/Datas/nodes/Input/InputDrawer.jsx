import { ref, defineComponent, computed, watch } from 'vue';
const options = [
  {
    value: '人员信息表',
    label: '人员信息表',
    fields: {
      name: 'number',
      id: 'string',
      address: 'string',
    }
  },
  {
    value: '在所人员',
    label: '在所人员',
    fields: {
      name: 'number',
      id: 'string',
    }
  },
  {
    value: '会员表',
    label: '会员表',
    fields: {
      name: 'number',
      id: 'string',
      age: 'string',
    }
  },
  {
    value: '价格表',
    label: '价格表',
    fields: {
      id: 'string',
      price: 'number'
    }
  },
];
import { useVueFlow } from '@vue-flow/core';
import { useNodeStateCheck } from '../../hooks/useNodeConfig';
export const InputDrawer = defineComponent({
  props: {
    node: {
      type: Object,
      required: false,
    }
  },
  setup({ node }) {
    const value = ref('');
    const { checkToTrue } = useNodeStateCheck(node.id);
    const optionItem = computed(() => options.find((v) => v.value == value.value));
    const { updateNodeData } = useVueFlow();
    function changHandler() {
      updateNodeData(node.id, {
        data: optionItem.value.value,
        field: optionItem.value.fields
      });
    }
    watch(value, (n, o) => {
      if (n) {
        checkToTrue();
      }
    })
    return () => (
      <>
        <el-select
          v-model={value.value}
          onChange={changHandler}
          // clearable
        >
          {
            options.map((item) =>
              <el-option
                label={item.label}
                value={item.value}
              />
            )
          }
        </el-select>
        { node.data.field
            ? Object.keys(node.data.field)
              .map(key => <div>{key} - {node.data.field[key]}</div>)
            : "请先选择表"
        }
      </>
    )
  }
});