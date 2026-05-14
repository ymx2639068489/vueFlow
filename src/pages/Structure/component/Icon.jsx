import { defineComponent } from "vue";
import { type } from './IconData';
export default defineComponent({
  name: '',
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: false,
    },
    height: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const { width, height, viewBox, d, fill } = type[props.name];
    return () => (
      <svg width={props.width || width} height={props.height || height} viewBox={viewBox}>
        { d.map(item => <path d={item} fill={fill}/>)}
      </svg>
    )
  }
})