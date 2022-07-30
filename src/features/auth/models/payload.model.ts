import { Role } from '../../user';

export interface IUserPayload {
  id: string;
  username: string;
  role: Role;
}
