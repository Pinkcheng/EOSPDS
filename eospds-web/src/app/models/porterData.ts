import { PorterType } from "./porterType";

export interface PorterData {
  id: string;
  name: string;
  tagNumber: string;
  birthday: Date;
  gender: boolean;
  type: PorterType;
}
