import { defineComponent } from "vue";
import useDragAndDrop from './hooks/useDnD';
import { asideNodes } from "./nodes/data";
import Icon from "./component/Icon";
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
      <>{
        asideNodes.map((item) => (
          <div style={style}>
            <div
              key={item.type}
              draggable
              ondragstart={($event) => onDragStart($event, item.type)}
              style={nodestyle}
            >
              <Icon name={item.icon} width="60px" height="60px" style="margin: 10px 10px;"/>
            </div>
            <div>{item.label}</div>
          </div>
        ))
      }</>
    )
  }
})