import { missionProcess } from './missionProcess';
export interface MissionData {
  "id": string,
  "content": string,
  "status": number,
  "createTime": Date,
  "label": {
    "id": string,
    "name": string
  },
  "instrument": {
    "id": string,
    "name": string
  },
  "startDepartment": {
    "id": string,
    "name": string
  },
  "endDepartment": {
    "id": string,
    "name": string
  },
  "porter": {
    "id": string,
    "name": string,
    "tagNumber": string,
    "birthday": null,
    "gender": false
  },
  "process": missionProcess[]
}
