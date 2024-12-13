import { Customer } from "../customer/Customer";

export type Product = {
  createdAt: Date;
  customer?: Customer | null;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
