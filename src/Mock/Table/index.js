import { PeopleTable } from './PeopleTable';
import { CaseTable } from './CaseTable';
import { PoliceOfficer } from './PoliceOfficer';


export const tableList = [
  PeopleTable.tableName,
  CaseTable.tableName,
  PoliceOfficer.tableName,
]

const tableMap = {
  [PeopleTable.tableName]: PeopleTable,
  [CaseTable.tableName]: CaseTable,
  [PoliceOfficer.tableName]: PoliceOfficer,
}
export function getTableInfoAndDataByTableName(tableName) {
  return tableMap[tableName];
}

export {
  PeopleTable,
  CaseTable,
  PoliceOfficer,
}
