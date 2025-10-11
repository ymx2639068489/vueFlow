import { InputNode, InputDrawer } from './Input'
import { OutputNode, OutputDrawer } from './Output'
import { FilterNode, FilterDrawer } from './Filter'
import { EditTableNode, EditTableDrawer } from './EditTable'
import { AddFieldNode, AddFieldDrawer } from './AddField'
import { DistinceNode, DistinceDrawer } from './Distince'
import { AggregationNode, AggregationDrawer } from './Aggregation'
import { IntersectionNode, IntersectionDrawer } from './Intersection'
import { NODETYPE } from './enum';

const nodetypelist = [
  {
    type: NODETYPE.Input,
    nodeComponent: (props) => <InputNode {...props} />,
    drawerComponent: (props) => <InputDrawer {...props} />,
    data: {
      label: '输入',
      icon: 'data',
      requireNode: 0,
    },
  },
  {
    type: NODETYPE.Output,
    nodeComponent: (props) => <OutputNode {...props} />,
    drawerComponent: (props) => <OutputDrawer {...props} />,
    data: {
      label: '全量输出',
      icon: 'output',
      requireNode: 1,
    },
  },
  {
    type: NODETYPE.Filter,
    nodeComponent: (props) => <FilterNode {...props} />,
    drawerComponent: (props) => <FilterDrawer {...props} />,
    data: {
      label: '数据过滤',
      icon: 'filter',
      requireNode: 1,
    },
  },
  {
    type: NODETYPE.Distince,
    nodeComponent: (props) => <DistinceNode {...props} />,
    drawerComponent: (props) => <DistinceDrawer {...props} />,
    data: {
      label: '数据去重',
      icon: 'distince',
      requireNode: 1,
    },
  },
  {
    type: NODETYPE.Group,
    nodeComponent: (props) => <AggregationNode {...props} />,
    drawerComponent: (props) => <AggregationDrawer {...props} />,
    data: {
      label: '数据聚合',
      icon: 'aggregation',
      requireNode: 1,
    },
  },
  {
    type: NODETYPE.EditTable,
    nodeComponent: (props) => <EditTableNode {...props} />,
    drawerComponent: (props) => <EditTableDrawer {...props} />,
    data: {
      label: '修改表结构',
      icon: 'edittable',
      requireNode: 1,
    },
  },
  {
    type: NODETYPE.AddField,
    nodeComponent: (props) => <AddFieldNode {...props} />,
    drawerComponent: (props) => <AddFieldDrawer {...props} />,
    data: {
      label: '添加字段',
      icon: 'addfield',
      requireNode: 1,
    },
  },
  {
    type: NODETYPE.Intersection,
    nodeComponent: (props) => <IntersectionNode {...props} />,
    drawerComponent: (props) => <IntersectionDrawer {...props} />,
    data: {
      label: '交集',
      icon: 'intersection',
      requireNode: 2,
    },
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
export const asideNodes = nodetypelist.map(
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