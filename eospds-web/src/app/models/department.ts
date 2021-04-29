import { Building } from ".";

export interface Department {
  id: string;
  building: Building;
  floor: string;
  name: string;
}
