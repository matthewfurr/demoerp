import { User } from "../user/User";
import { Product } from "../product/Product";

export type Customer = {
  createdAt: Date;
  createdBy?: User | null;
  customerId: string;
  customerName: string | null;
  id: number;
  location: string | null;
  products?: Product | null;
  updatedAt: Date;
};
