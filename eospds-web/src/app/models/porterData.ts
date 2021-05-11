import { Department } from './department';
import { PorterType } from "./porterType";
import { PorterStatus } from "./porterStatus";
import { Gender } from "./gender";
export interface PorterData {
  "id": string,
  "name": string,
  "tagNumber": string,
  "birthday": null,
  "department": {
    "id": string;
    "name": string;
    "floor": string;
  },
  "gender": number,
  "type": PorterType,
  "status": number,
}
