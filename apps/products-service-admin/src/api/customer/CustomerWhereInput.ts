import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CustomerWhereInput = {
  createdBy?: UserWhereUniqueInput;
  customerName?: StringNullableFilter;
  id?: IntFilter;
  location?: StringNullableFilter;
  products?: ProductWhereUniqueInput;
};
