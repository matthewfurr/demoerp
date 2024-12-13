import { User } from "../user/User";

export type Product = {
  createdAt: Date;
  customer?: User | null;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
