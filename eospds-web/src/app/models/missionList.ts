import { Department } from 'src/app/models';
import { MissionInstrument } from './missionInstrument';
import { MissionLabel } from './missionLabel';
import { PorterData } from './porterData';
export interface MissionList {
  "id": string,
  "content": string,
  "status": number,
  "createTime": Date,
  "label": MissionLabel,
  "instrument": MissionInstrument,
  "startDepartment": Department
  "endDepartment": Department,
  "porter": PorterData
}
