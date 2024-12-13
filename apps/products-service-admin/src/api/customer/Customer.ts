import { User } from "../user/User";

export type Customer = {
  createdAt: Date;
  createdBy?: User | null;
  customerId: string;
  customerName: string | null;
  id: number;
  location: string | null;
  updatedAt: Date;
};
