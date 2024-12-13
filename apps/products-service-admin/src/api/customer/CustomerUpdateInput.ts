import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerUpdateInput = {
  createdBy?: UserWhereUniqueInput | null;
  customerId?: string;
  customerName?: string | null;
  location?: string | null;
};
