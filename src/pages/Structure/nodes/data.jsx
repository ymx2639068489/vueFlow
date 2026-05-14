import { IntersectionNode, IntersectionDrawer } from './Intersection'
import AddPreson from './AddPreson';
const nodetypelist = [
  {
    type: AddPreson.ComponentName,
    nodeComponent: (props) => <AddPreson.NodeComponent {...props} />,
    drawerComponent: (props) => <AddPreson.DrawerComponent {...props} />,
    data: {
      icon: AddPreson.NodeIcon,
      label: AddPreson.NodeLabel,
    }
  },
]
/**
 * 通过node类型获取label和icon
 * {
 *  "inputnode": { label: "", icon: "" }
 * }
 */
export const NodeTypeMap = nodetypelist.reduce(
  (pre, { type, data }) => (pre[type] = { ...data }, pre),
  {}
);
/**
 * 通过node类型获取对于 drawer component
 * {
 *  "inputnode": component
 * }
 */
export const nodeTypes = nodetypelist.reduce(
  (pre, cur) => (pre[cur.type] = cur.nodeComponent, pre),
  {}
);
/**
 * 通过node类型获取对于 drawer component
 * {
 *  "inputnode": component
 * }
 */
export const nodeDrawerCpm = nodetypelist.reduce(
  (pre, cur) => (pre[cur.type] = cur.drawerComponent, pre),
  {}
);
/**
 * 侧边栏node列表
 * [
 *    { type: "", label: "", icon: "" }
 * ]
 */
export const asideNodes = nodetypelist.slice(1).map(
  ({ type, data }) => ({ type, ...data })
);
/**
 * VueFlow node-type 插槽
 * [
 *    { type: "", label: "", icon: "" }
 * ]
 */
export const NodeSlots = nodetypelist.reduce(
  (pre, { type, nodeComponent }) => (pre['node-' + type] = nodeComponent, pre),
  {}
);