import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerCreateInput = {
  createdBy?: UserWhereUniqueInput | null;
  customerId: string;
  customerName?: string | null;
  location?: string | null;
};
