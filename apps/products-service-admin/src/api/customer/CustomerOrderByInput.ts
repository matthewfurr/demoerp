import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  createdById?: SortOrder;
  customerId?: SortOrder;
  customerName?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  productsId?: SortOrder;
  updatedAt?: SortOrder;
};
