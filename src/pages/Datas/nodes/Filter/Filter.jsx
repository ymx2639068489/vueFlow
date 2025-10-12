import { computed, defineComponent, ref, watch } from "vue";
import { Delete, } from '@element-plus/icons-vue'
import { operatorOfType } from './data';
export const FilterItem = defineComponent({
  props: {
    fields: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Object,
      default: ''
    },
  },
  emits: ['update:modelValue', 'deleteItem'],
  setup(props, { emit }) {
    const selectRef = ref(null);

    const opLabel = computed(() => {
      return props.modelValue.key != ''
        ? operatorOfType[props.fields.find((v) => v.field == props.modelValue.key).type]
        : []
    });

    return () => (
      <div style={style}>
        <el-select
          ref={selectRef}
          modelValue={props.modelValue.key}
          onUpdate:modelValue={value => emit('update:modelValue', 'key', value)}
          placeholder="请选择字段"
        >
          { props.fields.map(field => <el-option label={field.field} value={field.field}></el-option>) }
        </el-select>
        <el-select
          modelValue={props.modelValue.operator}
          onUpdate:modelValue={value => emit('update:modelValue', 'operator', value)}
          placeholder="请选择匹配规则"
        >
          {
            opLabel.value.map(item => <el-option label={item.label} value={item.value} />)
          }
        </el-select>
        <el-input
          modelValue={props.modelValue.value}
          onUpdate:modelValue={value => emit('update:modelValue', 'value', value

          )}
          placeholder="请选择匹配值"
        />
        <el-button type="danger" icon={Delete} onClick={() => emit('deleteItem')}/>
      </div>
    )
  }
});



const style = {
  display: 'flex',
  gap: '10px', /* 设置子元素之间的间距 */
};
