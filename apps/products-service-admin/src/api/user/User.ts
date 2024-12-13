import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  customers?: Array<Customer>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  products?: Array<Product>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
