import { MarkerType } from '@vue-flow/core'

export const initialNodes = [
  {
    id: '1',
    type: 'inputnode',
    data: { label: 'Node 1' },
    position: { x: 20, y: 20 },
    class: 'light',
  },
  {
    id: '2',
    type: 'filternode',
    data: { label: 'Node 2' },
    position: { x: 260, y: -100 },
    class: 'light',
  },
  {
    id: '3',
    type: 'filternode',
    data: { label: 'Node 3' },
    position: { x: 260, y: 140 },
    class: 'light',
  },
  {
    id: '4',
    type: 'filternode',
    data: { label: 'Node 4' },
    position: { x: 500, y: -100 },
    class: 'light',
  },
  {
    id: '5',
    type: 'distincenode',
    data: { label: 'Node 5' },
    position: { x: 500, y: 140 },
    class: 'light',
  },
  {
    id: '6',
    type: 'outputnode',
    data: { label: 'Node 6' },
    position: { x: 620, y: 140 },
    class: 'light',
  },
]

export const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    markerEnd: MarkerType.ArrowClosed,
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    markerEnd: MarkerType.ArrowClosed,
  },
  {
    id: 'e4-5',
    source: '3',
    target: '5',
    markerEnd: MarkerType.ArrowClosed,
  },
  {
    id: 'e3-4',
    source: '2',
    target: '4',
    markerEnd: MarkerType.ArrowClosed,
  },
]
