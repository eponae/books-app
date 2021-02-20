import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FormType } from "./form.type";
import { getForm } from "./state/action";

type Props = {
  id: FormType["id"];
};

const Form: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();

  // selector to get form info => selector to get structured info

  useEffect(() => {
    dispatch(getForm(id));
  }, [id, dispatch]);

  return <div>{id}</div>;
};

export default Form;
