import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CustomerUpdateInput = {
  createdBy?: UserWhereUniqueInput | null;
  customerId?: string;
  customerName?: string | null;
  location?: string | null;
  products?: ProductWhereUniqueInput | null;
};
