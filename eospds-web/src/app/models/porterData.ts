import { Department } from './department';
import { PorterType } from "./porterType";
import { PorterStatus } from "./porterStatus";
import { Gender } from "./gender";
export interface PorterData {
  "id": string,
  "name": string,
  "tag": string,
  "birthday": Date,
  "department": Department,
  "gender": Gender,
  "type": PorterType,
  "status": PorterStatus,
  "mission": number,
  "position": string,
  "time": string
}
