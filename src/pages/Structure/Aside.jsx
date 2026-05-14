import { defineComponent } from "vue";
import useDragAndDrop from './hooks/useDnD';
import './nodes/node.css';
export default defineComponent({
  name: '',
  setup() {
    const { onDragStart } = useDragAndDrop();
    const style = {
      display: "inline-block",
      textAlign: "center",
    };
    const nodestyle = {
      borderRadius: "15%",
      border: "1px solid gray",
      margin: "8px",
      height: "80px",
      width: "80px",
    }
    return () => (
      <div>
        <div style={style}>
          <div
            draggable
            ondragstart={($event) => onDragStart($event, 'AddPreson', '')}
            style={nodestyle}
          >
            添加人员
          </div>
        </div>
      </div>
    )
  }
})