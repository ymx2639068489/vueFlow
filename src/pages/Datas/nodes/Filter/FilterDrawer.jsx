import { defineComponent, ref } from "vue"
import { FilterItem } from './Filter';
import { useVueFlow } from "@vue-flow/core";
import { getTableInfoAndDataByTableName } from "@/Mock";
import { operatorOfType } from './data';
import { filterNodeConfig } from '@/Mock/Filter'
import { useNodeStateCheck } from '../../hooks/useNodeConfig';
/**
 * 
 * 获取当前节点的上一个节点留下来的fields，然后根据类型进行进行筛选
 */
export const FilterDrawer = defineComponent({
  props: {
    node: {
      type: Object,
      required: true,
    }
  },
  setup({ node }) {
    const { getIncomers } = useVueFlow();
    const { checkToTrue } = useNodeStateCheck(node.id);
    // const { itemCheck}
    const lastNodeTableName = getIncomers(node.id)[0].data.data;
    const { fields } = getTableInfoAndDataByTableName(lastNodeTableName);
    console.log(fields)
    const filterlist = ref([{
      key: '',
      operator: '',
      value: '',
      op: '',
    }]);
    const addFilter = () => {
      filterlist.value.push({
        key: '',
        operator: '',
        value: '',
        op: '',
      });
    }
    const updateFilter = (index, key, value) => filterlist.value[index][key] = value;
    const delItem = (index) => filterlist.value.splice(index, 1);
    const sureClick = async () => {
      const res = filterlist.value.map(item => {
        return {
          ...item,
          op: operatorOfType['String'].find(v => v.value == item.operator).operator
        }
      });
      console.log(res);
      const rs = await filterNodeConfig(res);
      console.log(rs);
      checkToTrue();
    }
    return () => (
      <>
        {
          filterlist.value.map((filter, index) =>
            <FilterItem
              fields={fields}
              modelValue={filter}
              onUpdate:modelValue={(key, value) => updateFilter(index, key, value)}
              onDeleteItem={() => delItem(index)}
              style="margin: 10px 0"
            />
          )
        }
        <el-button onClick={addFilter} type="primary">添加筛选条件</el-button>
        <p></p>
        <el-button onClick={sureClick} type="primary">确定</el-button>
      </>
    )
  }
});

