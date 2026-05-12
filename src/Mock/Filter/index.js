
const __ = [
  { label: '大于', value: 'gt', operator: '>', fn: (key, value) => `${key} > ${value}`},
  { label: '大于等于', value: 'ge', operator: '>=', fn: (key, value) => `${key} > ${value}` },
  { label: '小于', value: 'lt', operator: '<', fn: (key, value) => `${key} > ${value}` },
  { label: '小于等于', value: 'le', operator: '<=', fn: (key, value) => `${key} > ${value}` },
  { label: '不等于', value: 'ne', operator: '<>', fn: (key, value) => `${key} > ${value}` },
  { label: '等于', value: 'eq', operator: '=', fn: (key, value) => `${key} > ${value}` },
]

const operatorOfType = {
  'String': [
    ...__,
    { label: '包含', value: 'include', operator: 'LIKE' },
    { label: '不包含', value: 'exclude', operator: 'NOT LIKE' },
  ],
  'Number': [...__],
}

export async function filterNodeConfig() {
  


}