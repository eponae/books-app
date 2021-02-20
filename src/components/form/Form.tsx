import { FC } from "react";
import { FormType } from "./form.type";

type Props = {
  id: FormType["id"];
};

const Form: FC<Props> = ({ id }) => {
  return <div>{id}</div>;
};

export default Form;
