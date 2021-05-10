import { MissionInstrument } from './missionInstrument';
import { MissionLabel } from './missionLabel';
export interface MissionList {
  "id": string,
  "content": string,
  "status": number,
  "createTime": Date,
  "label": MissionLabel,
  "instrument": MissionInstrument,
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
  }
}
