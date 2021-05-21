import { MissionLabel } from './missionLabel';
import { Department } from './department';
import { missionProcess } from './missionProcess';
import { MissionInstrument } from './missionInstrument';
export interface MissionData {
  "id": string,
  "content": string,
  "status": number,
  "createTime": string,
  "label": MissionLabel,
  "instrument": MissionInstrument,
  "startDepartment": Department,
  "endDepartment": Department,
  "porter": {
    "id": string,
    "name": string,
    "tagNumber": string,
    "birthday": null,
    "gender": number,
    "status": number
  },
  "process": missionProcess
}
