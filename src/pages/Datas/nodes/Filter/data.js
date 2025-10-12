
const __ = [
  { label: '大于', value: 'gt', operator: '>' },
  { label: '大于等于', value: 'ge', operator: '>=' },
  { label: '小于', value: 'lt', operator: '<' },
  { label: '小于等于', value: 'le', operator: '<=' },
  { label: '不等于', value: 'ne', operator: '<>' },
  { label: '等于', value: 'eq', operator: '=' },
]

export const operatorOfType = {
  'String': [
    ...__,
    { label: '包含', value: 'include', operator: 'LIKE' },
    { label: '不包含', value: 'exclude', operator: 'NOT LIKE' },
  ],
  'Number': [...__],
}