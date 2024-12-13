import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type CustomerWhereInput = {
  createdBy?: UserWhereUniqueInput;
  customerName?: StringNullableFilter;
  id?: IntFilter;
  location?: StringNullableFilter;
};
