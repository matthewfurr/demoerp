import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
