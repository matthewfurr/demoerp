import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type UserWhereInput = {
  customers?: CustomerListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  products?: ProductListRelationFilter;
  username?: StringFilter;
};
