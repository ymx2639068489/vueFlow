import { defineComponent } from 'vue';
import { getTableInfoAndDataByTableName } from '@/Mock'
export const InputDrawer = defineComponent({
  props: {
    node: {
      type: Object,
      required: false,
    }
  },
  setup({ node }) {
    const tableName = node.data.data;
    const { fields, data } = getTableInfoAndDataByTableName(tableName);
    // console.log(fields, data)
    return () => (
      <>
        <el-table data={data} stripe height="600">
          { fields.map(field => <el-table-column prop={field.field} label={field.field} />)}
        </el-table>
      </>
    )
  }
});