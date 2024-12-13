import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CustomerCreateInput = {
  createdBy?: UserWhereUniqueInput | null;
  customerId: string;
  customerName?: string | null;
  location?: string | null;
  products?: ProductWhereUniqueInput | null;
};
