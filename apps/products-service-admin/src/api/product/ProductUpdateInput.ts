import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductUpdateInput = {
  customer?: UserWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
