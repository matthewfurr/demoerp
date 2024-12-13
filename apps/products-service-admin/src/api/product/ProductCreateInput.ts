import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductCreateInput = {
  customer?: UserWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
