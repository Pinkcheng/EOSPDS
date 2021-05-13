import { Department } from 'src/app/models/department';
export interface Staff {
  id: string;
  name: string;
  professional: string;
  handover: number;
  department: {
    id: string;
    name: string;
    floor: string;
  };
}
