import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="createdBy.id"
          reference="User"
          label="Created By"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Customer ID" source="customerId" />
        <TextInput label="Customer Name" source="customerName" />
        <TextInput label="location" source="location" />
      </SimpleForm>
    </Create>
  );
};
